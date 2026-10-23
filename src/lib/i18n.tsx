"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

export type Lang = "en" | "ar";
export type Dir = "ltr" | "rtl";

/* ------------------------------------------------------------------ */
/* External lang store — read from localStorage / ?lang= query without */
/* hydration mismatches (useSyncExternalStore is the blessed pattern). */
/* ------------------------------------------------------------------ */

let currentLang: Lang | null = null;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Lang {
  if (currentLang) return currentLang;
  let next: Lang = "en";
  try {
    const saved = window.localStorage.getItem("layali-lang");
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "ar" || q === "en") next = q;
    else if (saved === "ar" || saved === "en") next = saved;
  } catch {
    /* private mode */
  }
  currentLang = next;
  return currentLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function emit(l: Lang) {
  currentLang = l;
  try {
    window.localStorage.setItem("layali-lang", l);
  } catch {
    /* private mode */
  }
  listeners.forEach((cb) => cb());
}

/* ------------------------------------------------------------------ */

interface LanguageCtx {
  lang: Lang;
  dir: Dir;
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<LanguageCtx>({
  lang: "en",
  dir: "ltr",
  isAr: false,
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync the document to the external store (DOM = external system, no setState needed)
  useEffect(() => {
    const dir: Dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const setLang = useCallback((l: Lang) => emit(l), []);
  const toggle = useCallback(() => emit(getSnapshot() === "en" ? "ar" : "en"), []);

  return (
    <Ctx.Provider
      value={{
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        isAr: lang === "ar",
        setLang,
        toggle,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage() {
  return useContext(Ctx);
}
