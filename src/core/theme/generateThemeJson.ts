import type { VSCodeThemeModal } from "../store/theme-store/theme-modal";
import { VSCodeThemeColors } from "./VSCodeColors";


export function GenerateThemeJson (theme: VSCodeThemeModal) {
    return {
        "name": theme.name,
        "type": theme.type,
        "colors": VSCodeThemeColors(theme.colors)
    }
}