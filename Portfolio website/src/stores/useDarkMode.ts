import { create } from "zustand";
import type { darkModeType } from "@/types/darkMode";

export const useDarkMode = create<darkModeType>((set) => ({
  isDarkMode:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : false,
  setDarkMode: (truthness: boolean) => set(() => ({ isDarkMode: truthness })),
}));
