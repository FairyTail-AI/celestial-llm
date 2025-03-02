"use client"

import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {RightFilesSidebar} from "@/components/pages/chat/right-files-sidebar";
import Link from "next/link";
import {Chat} from "@/components/chat";

export default function ChatPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Link href="/" className="font-semibold">
            Celestial Cloud
          </Link>

          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        <Chat />
      </SidebarInset>
      <RightFilesSidebar side="right" />
    </SidebarProvider>
  )
}
