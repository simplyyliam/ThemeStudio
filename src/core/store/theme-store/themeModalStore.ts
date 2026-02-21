import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { ThemeColors, VSCodeThemeModal } from "./theme-modal"

type ThemeStore = {
  theme: VSCodeThemeModal
  updateColor: (key: keyof ThemeColors, value: string) => void
  updateToken: (scope: string, value: string) => void
}

// In v5, we use create<T>()(...) with double parentheses
export const useThemeModal = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: {
        name: "ThemeStudio",
        type: "dark",
        colors: {
          background: "#020617",
          foreground: "#e5e7eb",
          sidebar: "#020617",
          activityBar: "#020617",
          statusBar: "#020617",
          titleBar: "#020617",
          panel: "#020617",
          border: "#1e293b",
        },
        tokenColors: [],
      },
      updateColor: (key, value) =>
        set((state) => ({
          theme: {
            ...state.theme,
            colors: { ...state.theme.colors, [key]: value },
          },
        })),
      updateToken: (scope, value) =>
        set((state) => ({
          theme: {
            ...state.theme,
            tokenColors: state.theme.tokenColors.map((token) =>
              token.scope === scope
                ? {
                    ...token,
                    settings: { ...token.settings, foreground: value },
                  }
                : token
            ),
          },
        })),
    }),
    {
      name: "theme-storage", // must be unique
      storage: createJSONStorage(() => localStorage),
    }
  )
)