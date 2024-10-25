'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { confirmSignUp } from 'aws-amplify/auth';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmSignUp() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleConfirmSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code
      });
      router.push('/signin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Confirm Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleConfirmSignUp} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Verify Email</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
