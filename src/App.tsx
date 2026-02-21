import { useState } from "react";
import { Box, ColorPickerPanel } from "./ui/components";


export default function App() {

  //Stores the selected totken from handleColorPicker
  const [activeToken, setActiveToken] = useState<string | null>(null)

  const handleCLick = (e: React.MouseEvent) => {
    
    //This line of code `el` is storing the DOM element object that was triggered from `e.target`, then uses `closest` method to find the data-token selectors on each element that was clicked on. If an element does not have a data-* it returns null, but if it does it returns the data-token of that element.
    // console.log("Target Element:", e.target as Element)
    // console.log("Closest Data Token:", (e.target as Element).closest("[data-token]") as HTMLElement | null)
    const el = (e.target as HTMLElement).closest("[data-token]") as HTMLElement | null
    if(!el) return
    //Storing the dataset value into `token` (e.g. "box-background")
    const token = el.dataset.token
    // console.log("Dataset:", el.dataset)

    if(!token) return

    setActiveToken(token)
     
  }
  return (
    <div onClick={handleCLick} className="flex flex-col items-center justify-center w-screen h-screen">
      <Box  tokenName="background"/>
      <Box  tokenName="foreground"/>
      <h1 data-token="text-color">This is a token</h1>
      <ColorPickerPanel 
        token={activeToken}
        onClose={() => setActiveToken(null)}
      />
    </div>
  )
}