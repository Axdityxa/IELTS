'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Changed from 'next/router'
import { Auth } from '@/components/utils/auth';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.signUp({ 
        username: email, 
        password,
      });
      router.push('/confirm-signup');
    } catch (err: any) {
      console.error('Sign up error:', err);
      setError(err.message || 'An error occurred during sign up');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
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
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="mt-4 text-center">
            <p>Already have an account? <Link href="/signin" className="text-primary">Sign In</Link></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
