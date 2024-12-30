'use client';

import { Store } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AuthFormHeaderProps {
  isLogin: boolean;
}

export function AuthFormHeader({ isLogin }: AuthFormHeaderProps) {
  return (
    <CardHeader>
      <div className="flex items-center justify-center mb-4">
        <Store className="h-10 w-10 text-primary" />
      </div>
      <CardTitle className="text-2xl text-center">
        {isLogin ? 'Welcome back' : 'Create account'}
      </CardTitle>
      <CardDescription className="text-center">
        {isLogin
          ? 'Enter your credentials to access your account'
          : 'Enter your information to create an account'}
      </CardDescription>
    </CardHeader>
  );
}