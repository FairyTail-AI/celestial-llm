/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientAttachment } from './ClientAttachment';
import type { ToolInvocation } from './ToolInvocation';
export type ClientMessage = {
  role: string;
  content: string;
  experimental_attachments?: (Array<ClientAttachment> | null);
  toolInvocations?: (Array<ToolInvocation> | null);
};

