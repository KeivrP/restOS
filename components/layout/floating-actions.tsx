'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Package, Coffee, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const actions = [
    {
      icon: Package,
      label: 'New Product',
      href: '/dashboard/products/new',
      color: 'bg-violet-500 hover:bg-violet-600',
    },
    {
      icon: Coffee,
      label: 'New Table',
      href: '/dashboard/tables/new',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      icon: Users,
      label: 'New User',
      href: '/dashboard/users/new',
      color: 'bg-pink-500 hover:bg-pink-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3">
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  className={`${action.color} text-white shadow-lg flex items-center gap-2`}
                  onClick={() => {
                    router.push(action.href);
                    setIsOpen(false);
                  }}
                >
                  <action.icon className="h-4 w-4" />
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className={`rounded-full shadow-lg ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  );
}