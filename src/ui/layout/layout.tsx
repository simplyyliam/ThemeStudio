import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../../styles";

export default function Layout() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Outlet />
      </ThemeProvider>
    </div>
  );
}
