/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentTypeStats } from './DocumentTypeStats';
export type IndexStats = {
  index_exists: boolean;
  total_documents: number;
  document_types: Array<DocumentTypeStats>;
  last_indexed?: (string | null);
};

