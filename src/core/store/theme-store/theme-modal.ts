/*
Interface scheme of the ThemeColors (NOT syntax)
- The structural UI color system of VS Code.
*/
export interface ThemeColors {
    background: string
    foreground: string
    sidebar: string
    activityBar: string
    statusBar: string
    titleBar: string
    panel: string
    border: string
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