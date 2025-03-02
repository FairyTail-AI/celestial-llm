import { useQuery } from '@tanstack/react-query';
import { UserRead } from '@/types/generated';
import { axiosInstance } from '@/lib/axios-instance';

export const useMe = () => {
  return useQuery<UserRead>({
    queryKey: ['userMe'],
    queryFn: () => axiosInstance.get('/users/me'),
    retry: false,
    // staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
};
