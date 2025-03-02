'use client'

import {SidebarFooter} from "@/components/ui/sidebar";
import {DialogUploadDocumentsButton} from "@/components/pages/chat/dialog-upload-documents-button";

export const SidebarFooterAddDocumentButton = () => {
  return (
    <SidebarFooter>
      <DialogUploadDocumentsButton />
    </SidebarFooter>
  )
}