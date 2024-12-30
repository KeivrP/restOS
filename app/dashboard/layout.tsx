'use client';

import { FloatingNav } from '@/components/layout/floating-nav';
import { SearchBar } from '@/components/layout/search-bar';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import Link from 'next/link';
import { UserNav } from '@/components/layout/user-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
            <Store className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hidden sm:inline">
              RestaurantOS
            </span>
          </Link>
          <SearchBar />
          <UserNav />
        </div>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.main>
      <FloatingNav />
    </div>
  );
}