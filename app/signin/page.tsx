'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@/components/utils/auth';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  // For now, we'll disable Google sign in since it needs additional configuration
  const handleGoogleSignIn = async () => {
    setError('Google sign in is not configured yet');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          <div className="mt-4">
            <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
              Sign In with Google
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p>Don't have an account? <Link href="/signup" className="text-primary">Sign Up</Link></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
