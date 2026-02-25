import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Favcon } from "./favcon";


export function SidebarUser() {
    return (
        <SidebarMenu> 
            <SidebarMenuItem> 
                <SidebarMenuButton className="h-[80]">
                    <div className="flex items-center gap-1">
                        <Favcon/>
                        <h1>@simplyyliam</h1>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}