import { useMutation } from '@tanstack/react-query';
import { UserCreate, UserRead } from '@/types/generated';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";

export const useRegisterMutation = () => {
  return useMutation<UserRead, AxiosError, UserCreate>({
    mutationFn: (data) => axiosInstance.post('/auth/register', data),
  });
};