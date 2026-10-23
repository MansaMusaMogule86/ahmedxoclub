"use client";

import { create } from "zustand";
import type { TableTypeKey } from "@/lib/brand";

interface BookingStore {
  tableType: TableTypeKey;
  guests: number;
  setTableType: (t: TableTypeKey) => void;
  setGuests: (n: number) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  tableType: "PREMIUM",
  guests: 5,
  setTableType: (t) => set({ tableType: t }),
  setGuests: (n) => set({ guests: n }),
}));
