'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Package, Coffee, FileText, Users } from 'lucide-react';

const routes = [
  {
    label: 'Products',
    icon: Package,
    href: '/dashboard/products',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Tables',
    icon: Coffee,
    href: '/dashboard/tables',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Reports',
    icon: FileText,
    href: '/dashboard/reports',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Users',
    icon: Users,
    href: '/dashboard/users',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
];

export function MainNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-x-2 hover:bg-muted',
            pathname === route.href
              ? cn('bg-muted', route.color)
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <route.icon className={cn('h-5 w-5', 
            pathname === route.href ? route.color : 'text-muted-foreground group-hover:text-foreground'
          )} />
          <span>{route.label}</span>
          {pathname === route.href && (
            <span className={cn('ml-auto h-2 w-2 rounded-full', route.bgColor)} />
          )}
        </Link>
      ))}
    </nav>
  );
}