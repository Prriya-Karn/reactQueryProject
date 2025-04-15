import * as React from "react"




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { SearchForm } from "./search-form"
import { Book, Box, Home, Icon } from "lucide-react"
import { link } from "fs"
import { NavLink } from "react-router"

// This is sample data.
const data = [
    {
        name : "home",
        icon : <Home className="w-4 h-4" />,
        link : "/home"
    },
    {
        name : "book",
        icon: <Book className="w-4 h-4" />,
        link:"/book"
    }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b-2 p-5">
       
        <div className="flex items-center">
            <Box className="w-6 h-6 mr-2" />
            <span className="text-md font-bold">Coder's Book</span>
           
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-5">
        {/* We create a SidebarGroup for each parent. */}
        {data.map((item) => (
          <SidebarGroup key="">
        
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="capitalize">
                    <NavLink to={item.link} className="flex items-center">
                  
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
               

                    </NavLink>
              
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
