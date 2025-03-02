'use client'

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import * as React from "react";
import {useDocuments} from "@/hooks/document/use-documents";
import { Badge } from "@/components/ui/badge";

export const SidebarMenuDocumentsContent = () => {
  const {data, isLoading, isError} = useDocuments()

  return (
    <>
      {data?.items.map((item) => (
        <SidebarMenuItem key={item.id}>
          <SidebarMenuButton asChild>
            <div className="flex gap-2 justify-between">
              <p
                title={`${item.file_name}.${item.doc_type}`}
                className="font-medium truncate"
              >
                {`${item.file_name}.${item.doc_type}`}
              </p>

              <Badge title="Статус" variant="outline">
                {item.status}
              </Badge>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  )
}