import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar"
import {SidebarMenuDocumentsContent} from "@/components/pages/chat/sidebar-menu-documents-content";
import {SidebarFooterAddDocumentButton} from "@/components/pages/chat/sidebar-footer-add-document-button";

export function RightFilesSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Загруженные Документы</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuDocumentsContent />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooterAddDocumentButton />
      <SidebarRail />
    </Sidebar>
  )
}
