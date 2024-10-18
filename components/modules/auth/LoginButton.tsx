import { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/common/Button';

export const LoginButton: FC = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!user && (
        <Button as="a" href="/api/auth/login">
          Sign In
        </Button>
      )}
      {user && (
        <Button as="a" href="/api/auth/logout" variant="outline">
          Sign Out
        </Button>
      )}
    </>
  );
};