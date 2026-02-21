import { useThemeModal } from "../../core"

interface BoxProps {
    tokenName: string
    className?: string
}
export default function Box({tokenName, className}: BoxProps) {

    const theme = useThemeModal((s) => s.theme)
    
    return (
        <div data-token={tokenName} className={`w-24 h-24 border border-neutral-400 ${className}`} 
        style={{background: `${theme.colors.background}`}}
        ></div>
    )
}