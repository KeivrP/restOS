'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Store, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { UserNav } from './user-nav';
import { NotificationButton } from './notification-button';
import { MainNavLinks } from './main-nav-links';

export function MainNav() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-8">
        <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
          <Store className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            RestaurantOS
          </span>
        </Link>
        
        <div className="hidden lg:flex relative max-w-md w-full">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search products, orders, tables..."
            className="w-full pl-10 bg-muted/50 focus:bg-background transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <MainNavLinks />
        <div className="flex items-center gap-x-2">
          <NotificationButton />
          <UserNav />
        </div>
      </div>
    </div>
  );
}