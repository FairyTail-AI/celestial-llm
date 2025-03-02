import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/lib/axios-instance';
import { DocumentList, HTTPValidationError } from '@/types/generated';

export const useUploadDocuments = () => {
  const queryClient = useQueryClient();

  return useMutation<DocumentList, AxiosError<HTTPValidationError>, FormData>({
    mutationFn: (formData) => {
      return axiosInstance.post('/documents/upload/batch', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
    },
  });
};