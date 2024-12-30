'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Store,
  LayoutDashboard,
  Package,
  Users,
  Settings,
  ShoppingCart,
  Bell,
  Menu,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Products',
    icon: Package,
    href: '/dashboard/products',
    color: 'text-violet-500',
  },
  {
    label: 'Customers',
    icon: Users,
    href: '/dashboard/customers',
    color: 'text-pink-700',
  },
  {
    label: 'Orders',
    icon: ShoppingCart,
    href: '/dashboard/orders',
    color: 'text-orange-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex h-16 items-center px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center">
                <Store className="h-6 w-6" />
                <span className="font-bold ml-2">ModernShop</span>
              </Link>
            </div>
            <div className="my-4 px-3">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-x-2 text-sm font-medium p-3 hover:text-primary hover:bg-muted rounded-lg transition-all',
                    pathname === route.href ? 'text-primary bg-muted' : 'text-muted-foreground',
                  )}
                >
                  <route.icon className={cn('h-5 w-5', route.color)} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center">
          <Store className="h-6 w-6" />
          <span className="font-bold ml-2 hidden md:block">ModernShop</span>
        </Link>
        <div className="hidden lg:flex items-center gap-x-4 mx-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex items-center gap-x-2 text-sm font-medium hover:text-primary transition-colors',
                pathname === route.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <route.icon className={cn('h-4 w-4', route.color)} />
              {route.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-destructive rounded-full" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}