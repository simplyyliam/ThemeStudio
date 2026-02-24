import { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import {
  PaletteIcon,
  SettingsIcon,
  FileDownIcon,
  ShareIcon,
  HistoryIcon,
  ChevronRight,
  Copy,
  Palette,
  Sliders,
  Zap,
  HelpCircle,
} from "lucide-react";

export default function Layout() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-bold">ThemeStudio</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/">
                      <PaletteIcon className="size-4" />
                      <span>Theme Editor</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/settings">
                      <SettingsIcon className="size-4" />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Tools & Features</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Export Submenu */}
                <SidebarMenuItem>
                  <div
                    onClick={() => toggleMenu("export")}
                    className="flex items-center justify-between cursor-pointer px-2 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileDownIcon className="size-4" />
                      <span className="text-sm">Export Theme</span>
                    </div>
                    <ChevronRight
                      className={`size-4 transition-transform ${
                        expandedMenu === "export" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedMenu === "export" && (
                    <div className="ml-4 mt-1 space-y-1">
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Copy className="size-3" />
                        Export as JSON
                      </button>
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Palette className="size-3" />
                        Download CSS
                      </button>
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Copy className="size-3" />
                        Copy to Clipboard
                      </button>
                    </div>
                  )}
                </SidebarMenuItem>

                {/* Share Submenu */}
                <SidebarMenuItem>
                  <div
                    onClick={() => toggleMenu("share")}
                    className="flex items-center justify-between cursor-pointer px-2 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ShareIcon className="size-4" />
                      <span className="text-sm">Share Theme</span>
                    </div>
                    <ChevronRight
                      className={`size-4 transition-transform ${
                        expandedMenu === "share" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedMenu === "share" && (
                    <div className="ml-4 mt-1 space-y-1">
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Copy className="size-3" />
                        Generate Link
                      </button>
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Zap className="size-3" />
                        Publish Theme
                      </button>
                    </div>
                  )}
                </SidebarMenuItem>

                {/* History/Recent Submenu */}
                <SidebarMenuItem>
                  <div
                    onClick={() => toggleMenu("history")}
                    className="flex items-center justify-between cursor-pointer px-2 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <HistoryIcon className="size-4" />
                      <span className="text-sm">History</span>
                    </div>
                    <ChevronRight
                      className={`size-4 transition-transform ${
                        expandedMenu === "history" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedMenu === "history" && (
                    <div className="ml-4 mt-1 space-y-1">
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <HistoryIcon className="size-3" />
                        Recent Themes
                      </button>
                      <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center gap-2">
                        <Sliders className="size-3" />
                        Saved Presets
                      </button>
                    </div>
                  )}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center border-b px-4">
          <SidebarTrigger className="-ml-1 mr-4" />
        </header>
        <main className="flex flex-1 flex-col p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
