/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentStatus } from './DocumentStatus';
import type { DocumentType } from './DocumentType';
export type DocumentListRead = {
  id: string;
  status: DocumentStatus;
  doc_type: DocumentType;
  file_name: string;
  file_path: string;
  created_at: string;
  updated_at: (string | null);
};

