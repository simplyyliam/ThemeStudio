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
          foreground: "",
          subtleForeground: "",

          // Structure
          border: "",
          focusBorder: "",

          // Interaction
          selection: "",
          hover: "",
          lineHighlight: "",

          // Accent
          accent: ""

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