import { useMutation } from '@tanstack/react-query';
import { UserRead, UserUpdate } from '@/types/generated';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";

export const useUpdateProfileMutation = () => {
  return useMutation<UserRead, AxiosError, UserUpdate>({
    mutationFn: (data) => axiosInstance.patch('/users/me', data),
  });
};