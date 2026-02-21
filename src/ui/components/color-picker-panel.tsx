import { useCallback } from "react";
import { useThemeModal } from "../../core";
import { type ThemeColors } from "../../core/store/theme-store/theme-modal";

interface ColorPickerProps {
  token: string | null;
  onClose: () => void;
}
export default function ColorPickerPanel({ token, onClose }: ColorPickerProps) {
  
  const { updateColor, udpateToken, theme } = useThemeModal()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(!token) return
    //Stores the color value on input type="color"
    const colorValue = e.target.value
    
    //Live preview
    document.documentElement.style.setProperty(`--${token}`, colorValue)

    const colorKey = Object.keys(theme.colors) as (keyof ThemeColors)[]
    const matched = colorKey.find((key) => 
      token === String(key) || token.endsWith(`-${key}`) 
  )

  // const stringKey = colorKey.find(k => String(k))
  // console.log("Token:", token)
  // console.log("String(Key):", stringKey)
  // console.log("Matched:", matched)

    if(matched) {
      updateColor(matched, colorValue)
    } else {
      udpateToken(token, colorValue)
    }
    
    
    if(!token) return null
  }, [theme, updateColor, udpateToken, token])


  const themeJson = JSON.stringify(useThemeModal.getState().theme, null, 2)

  console.log("background:", theme.colors.background)
  console.log("foreground:", theme.colors.foreground)

  console.log("Theme JSON:", themeJson)
  
  return (
    <div className="fixed flex gap-2 items-center justify-center bottom-5 bg-neutral-200 p-2.5 rounded-xl">
      <h3 className="text-sm opacity-70">Editing</h3>
      <div className="font-mono">{token}</div>

      <input
        type="color"
        onChange={handleChange}
      />

      <button onClick={onClose}>Close</button>
    </div>
  );
}
