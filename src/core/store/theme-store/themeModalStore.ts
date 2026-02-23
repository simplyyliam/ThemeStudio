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
          //core surface
          editorBg: "#020617",
          sidebarBg: "#e5e7eb",
          activityBarBg: "#020617",
          panelBg: "#020617",
          statusBarBg: "#020617",
          titleBarBg: "#020617",
          tabsBg: "#020617",

          // Text
          foreground: "#e5e7eb",
          subtleForeground: "#94a3b8",

          // Structure
          border: "#1e293b",
          focusBorder: "#3b82f6",

          // Interaction
          selection: "#1e293b",
          hover: "#0f172a",
          lineHighlight: "#020617",

          // Accent
          accent: "#38bdf8"

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