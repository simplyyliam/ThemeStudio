
//useThemeModal is the brain of the app. It is the Global theme state engine.

import { create } from "zustand"
import type { ThemeColors, VSCodeThemeModal } from "./theme-modal"

/*
All possible mutations themes could experience 
    1: What data exists
    2: How it is allowed to change
*/

type ThemeStore = {
    theme: VSCodeThemeModal
    updateColor: (key: keyof ThemeColors, value: string) => void
    udpateToken: (scope: string, value: string) => void
}


export const useThemeModal = create<ThemeStore>((set) => ({
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
            border: "#1e293b"
        },
        tokenColors: []
    },
    updateColor: (key, value) => {
        set((s) => ({
            theme: {
                ...s.theme,
                colors: {
                    ...s.theme.colors,
                    [key]: value
                }
            }
        }))
    },
    udpateToken: (scope, value) => {
        set((s) => ({
            theme: {
                ...s.theme,
                tokenColors: s.theme.tokenColors.map((token) => 
                    token.scope === scope ? {
                        ...token, settings: {
                            ...token.settings, foreground: value
                        } 
                    } : token
                )
            }
        }))
    }
}))

