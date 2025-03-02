import {useMutation, useQueryClient} from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios-instance';
import {AxiosError} from "axios";
import {Body_auth_jwt_login_api_auth_jwt_login_post, ErrorModel} from "@/types/generated";

export const useLoginMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<void, AxiosError<ErrorModel>, Body_auth_jwt_login_api_auth_jwt_login_post>({
    mutationFn: (credentials) => {
      const formData = new FormData()
      formData.append("username", credentials.username)
      formData.append("password", credentials.password)

      return axiosInstance.post(
        '/auth/jwt/login',
        formData,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userMe"] })
    }
  });
};
