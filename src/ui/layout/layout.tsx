import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { Favcon, SidebarUser } from "../components";
import { SidebarItems } from "@/lib/sidebar-nav-items";

export default function Layout() {
  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <div className="flex items-center gap-1">
            <Favcon />
            <h1 className="font-dot">ThemeStudio</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {SidebarItems.map((item) => (
            <SidebarGroup>
              <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    {item.children.map((child) => (
                      <SidebarMenuButton>{child}</SidebarMenuButton>
                    ))}
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="border">
        <header className="flex h-12 items-center px-4">Theme Editor</header>
        <main className="flex flex-1 flex-col p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
