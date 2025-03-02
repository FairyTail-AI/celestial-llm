import {useMe} from "@/hooks/auth/use-me";
import {useLoginMutation} from "@/hooks/auth/use-login";
import {useLogoutMutation} from "@/hooks/auth/use-logout";
import {useRegisterMutation} from "@/hooks/auth/use-register";
import {useForgotPasswordMutation} from "@/hooks/auth/use-forgot-password";
import {useResetPasswordMutation} from "@/hooks/auth/use-reset-password";
import {useUpdateProfileMutation} from "@/hooks/auth/use-update-profile";

export {
  useMe,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
}