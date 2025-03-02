/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentStatus } from './DocumentStatus';
import type { DocumentType } from './DocumentType';
export type DocumentCheck = {
  id: string;
  file_name: string;
  file_path: string;
  doc_type: DocumentType;
  status: DocumentStatus;
  error_message?: (string | null);
};

