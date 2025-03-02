import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";
import {Body_reset_forgot_password_api_auth_forgot_password_post} from "@/types/generated";

export const useForgotPasswordMutation = () => {
  return useMutation<void, AxiosError, Body_reset_forgot_password_api_auth_forgot_password_post>({
    mutationFn: (data) => axiosInstance.post('/auth/forgot-password', data),
  });
};
