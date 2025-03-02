import {useMutation, useQueryClient} from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<void, AxiosError, void>({
    mutationFn: () => axiosInstance.post('/auth/jwt/logout'),
    onSuccess: () => {
      queryClient.setQueryData(['userMe'], null);
      queryClient.removeQueries({ queryKey: ['userMe'] });
    }
  });
};