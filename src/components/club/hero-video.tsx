"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { BRAND_LOGO_SQUARE } from "@/components/club/brand-logo";

/** Canonical hero video (portrait 1080x1920, 9:16). */
const HERO_VIDEO_SRC = "/videos/hero/xo-hero.mp4";
/** Branded poster: shown until the first frame decodes (no black flash). */
const HERO_POSTER = BRAND_LOGO_SQUARE;

/**
 * Full-screen hero video backdrop.
 *
 * Fit strategy — the video is PORTRAIT 9:16:
 * - portrait viewports (phones): `object-cover` fills the screen, which is
 *   effectively a native fit and crops almost nothing;
 * - landscape viewports (desktops/tablets): `object-contain`, so the vertical
 *   artwork is never cropped and the brand elements inside it stay intact —
 *   the surrounding area uses the matching dark stage (`hero-stage-bg`),
 *   which is the fallback the branding spec asks for.
 *
 * Playback: autoplay, muted, looped, inline, `preload="metadata"` and no audio
 * track is used. Under `prefers-reduced-motion` the video never autoplays and a
 * static branded panel is rendered instead.
 */
export function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (!reduceMotion) return;
    // Respect the preference even if the element already started.
    videoRef.current?.pause();
  }, [reduceMotion]);

  const useStaticFallback = reduceMotion || hasFailed;

  return (
    <div className="absolute inset-0 hero-stage-bg" aria-hidden="true">
      {useStaticFallback ? (
        /* Static fallback: branded mark centred on the matching dark stage. */
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={BRAND_LOGO_SQUARE}
            alt=""
            width={512}
            height={512}
            sizes="(max-width: 640px) 45vw, 320px"
            className="h-auto w-[38vw] max-w-[320px] opacity-80"
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setHasFailed(true)}
          /* Fit: portrait viewports fill (`cover`); landscape viewports use
             `contain` so the vertical artwork is never cropped, and from xl up
             it is nudged right so the hero copy sits on the dark stage beside
             it instead of covering the animation. */
          className="absolute inset-0 h-full w-full object-cover object-center landscape:object-contain xl:landscape:object-[72%_50%] transition-opacity duration-1000"
          style={{ opacity: isPlaying ? 1 : 0 }}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* Scrims: keep the copy legible without washing the footage out. */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/75 via-night/40 to-night" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.62)_100%)]" />
      {/* Landscape only: soft vertical fade so the contained video's side bands
          blend into the stage instead of reading as hard letterboxing. */}
      <div className="absolute inset-y-0 start-0 hidden w-1/2 bg-gradient-to-r from-night via-night/70 to-transparent xl:landscape:block" />
      <div className="absolute inset-y-0 end-0 hidden w-1/5 bg-gradient-to-l from-night to-transparent xl:landscape:block" />
    </div>
  );
}
