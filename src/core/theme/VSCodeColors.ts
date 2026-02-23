import type { ThemeColors } from "../store/theme-store/theme-modal";


export function VSCodeThemeColors(colors: ThemeColors) {
    return {
        // Editor
        "editor.background": colors.editorBg,
        "editor.foreground": colors.foreground,
        "editor.lineHighlightBackground": colors.lineHighlight,
        "editor.selectionBackground": colors.selection,

        // Sidebar
        "sideBar.background": colors.sidebarBg,
        "sideBar.foreground": colors.foreground,

        // Activity Bar
        "activityBar.background": colors.activityBarBg,
        "activityBar.foreground": colors.foreground,
        "activityBar.activeBorder": colors.accent,

        // Panel
        "panel.background": colors.panelBg,
        "panel.border": colors.border,
        "panelTitle.activeBorder": colors.accent,

        // Status Bar
        "statusBar.background": colors.statusBarBg,
        "statusBar.foreground": colors.foreground,

        // Title Bar
        "titleBar.activeBackground": colors.titleBarBg,
        "titleBar.activeForeground": colors.foreground,

        // Tabs
        "editorGroupHeader.tabsBackground": colors.tabsBg,
        "tab.activeBorder": colors.accent,

        // Global UI
        "foreground": colors.foreground,
        "focusBorder": colors.focusBorder,
        "list.hoverBackground": colors.hover,
        "list.activeSelectionBackground": colors.selection,

        // Links & Progress
        "textLink.foreground": colors.accent,
        "progressBar.background": colors.accent,
    }
}