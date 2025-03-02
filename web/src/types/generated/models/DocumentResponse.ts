/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentStatus } from './DocumentStatus';
import type { DocumentType } from './DocumentType';
export type DocumentResponse = {
  file_name: string;
  doc_type: DocumentType;
  id: string;
  status: DocumentStatus;
  error_message?: (string | null);
  created_at: string;
  updated_at: string;
};

