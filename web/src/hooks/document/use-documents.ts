import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/lib/axios-instance';
import {HTTPValidationError, Page_DocumentListRead_} from "@/types/generated";

interface DocumentQueryParams {
  orderBy?: string;
  search?: string;
  page?: number;
  size?: number;
}

export const useDocuments = (params: DocumentQueryParams = {}) => {
  return useQuery<Page_DocumentListRead_, AxiosError<HTTPValidationError>>({
    queryKey: ['documents', params],
    queryFn: () => axiosInstance.get('/documents', { params }),
  });
};