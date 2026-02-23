/*
Interface scheme of the ThemeColors (NOT syntax)
- The structural UI color system of VS Code.
*/
export interface ThemeColors {
  // Core surfaces
  editorBg: string
  sidebarBg: string
  activityBarBg: string
  panelBg: string
  statusBarBg: string
  titleBarBg: string
  tabsBg: string

  // Text
  foreground: string
  subtleForeground: string

  // Structure
  border: string
  focusBorder: string

  // Interaction
  selection: string
  hover: string
  lineHighlight: string

  // Accent
  accent: string
}


/*
Interface scheme of the TokenColor 
- Syntax highlighting rules

Use Case: 
- keywords
- strings
- numbers
- comments
- functions
- types


example: 

    {
    "scope": "keyword",
    "settings": { "foreground": "#ff79c6" }
    }


*/
interface TokenColors {
    scope: string | string[]
    settings: {
        foreground?: string
        background?: string
        fontStyle?: string
    }
}


// Interface scheme of the ThemeModal
// A complete VS Code theme file in structured TypeScript form.
export interface VSCodeThemeModal {
    name: string
    type: "dark" | "light"
    colors: ThemeColors 
    tokenColors: TokenColors[]
}