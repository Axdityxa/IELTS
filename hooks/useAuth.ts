import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuth = (requireAuth = true) => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && requireAuth && !user) {
      router.push('/api/auth/login');
    }
  }, [isLoading, requireAuth, user, router]);

  return { user, isLoading, error };
};