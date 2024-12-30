'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { AuthFormHeader } from './auth-form-header';
import { AuthFormFields } from './auth-form-fields';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isLogin ? 'Bienvenido!' : 'Account created successfully!');
    router.push('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[380px]">
        <AuthFormHeader isLogin={isLogin} />
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthFormFields isLogin={isLogin} />
            <Button type="submit" className="w-full">
              {isLogin ? 'Sign in' : 'Create account'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-primary hover:underline"
            >
              Iniciar
            </button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}