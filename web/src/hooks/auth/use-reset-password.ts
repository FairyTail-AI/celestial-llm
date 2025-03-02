import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";
import {Body_reset_reset_password_api_auth_reset_password_post} from "@/types/generated";

export const useResetPasswordMutation = () => {
  return useMutation<void, AxiosError, Body_reset_reset_password_api_auth_reset_password_post>({
    mutationFn: (data) => axiosInstance.post('/auth/reset-password', data),
  });
};
