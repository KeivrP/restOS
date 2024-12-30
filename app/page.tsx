import { AuthForm } from '@/components/auth-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <AuthForm />
    </main>
  );
}