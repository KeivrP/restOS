'use client';

import { UserCircle2, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthFormFieldsProps {
  isLogin: boolean;
}

export function AuthFormFields({ isLogin }: AuthFormFieldsProps) {
  return (
    <div className="space-y-4">
      {!isLogin && (
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <UserCircle2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input id="name" placeholder="John Doe" className="pl-10" />
          </div>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="password" type="password" className="pl-10" />
        </div>
      </div>
    </div>
  );
}