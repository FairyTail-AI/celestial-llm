"use client"

import { createContext, useContext, useMemo } from 'react';
import {Body_auth_jwt_login_api_auth_jwt_login_post, UserRead} from '@/types/generated';
import {
  useMe,
  useLoginMutation,
  useLogoutMutation,
} from '@/hooks/auth';
import {useRouter} from "next/navigation";
import {toast} from "sonner";

interface AuthContextType {
  user: UserRead | null;
  isLoading: boolean;
  login: (payload: Body_auth_jwt_login_api_auth_jwt_login_post) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const { data: userData, isLoading: isUserLoading } = useMe();

  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const login = (payload: Body_auth_jwt_login_api_auth_jwt_login_post) => {
    loginMutation.mutate(payload, {
      onError: (error) => {
        toast.error(error.response?.data.detail as string)
      }
    })
  };

  const logout = () => {
    logoutMutation.mutate(undefined, {
      onError: () => {
        window.location.reload()
      },
      onSuccess: () => {
        router.replace("/")
      }
    })
  };

  const isLoading = isUserLoading
    || loginMutation.isPending
    || logoutMutation.isPending;

  const value = useMemo(
    () => ({
      user: userData ?? null,
      isLoading,
      login,
      logout,
    }),
    [userData, isLoading]
  );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useRequireAuth = () => {
  const { user, isLoading } = useAuth();

  return {
    isLoading,
    isAuthenticated: !!user,
  };
};