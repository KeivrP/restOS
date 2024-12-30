'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Package, Coffee, FileText, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { 
      icon: Package, 
      label: "Products",
      href: "/dashboard/products",
      color: "text-violet-500"
    },
    { 
      icon: Coffee, 
      label: "Tables",
      href: "/dashboard/tables",
      color: "text-orange-500"
    },
    { 
      icon: FileText, 
      label: "Reports",
      href: "/dashboard/reports",
      color: "text-emerald-500"
    },
    { 
      icon: Users, 
      label: "Users",
      href: "/dashboard/users",
      color: "text-pink-500"
    },
  ];

  const quickActions = [
    { label: "New Product", href: "/dashboard/products/new" },
    { label: "New Table", href: "/dashboard/tables/new" },
    { label: "New User", href: "/dashboard/users/new" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-sm mx-auto">
        <div className="bg-card/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-border">
          <div className="flex items-center justify-between md:justify-center gap-2">
            {items.map(({ icon: Icon, label, href, color }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(href)}
                className={cn(
                  "p-2 md:p-3 rounded-full hover:bg-primary/10 transition-colors",
                  pathname === href ? color : "text-muted-foreground hover:text-primary"
                )}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sr-only">{label}</span>
              </motion.button>
            ))}
            <Button
              size="icon"
              className="rounded-full"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full left-0 right-0 mb-2 bg-card rounded-lg shadow-lg border border-border p-2 mx-4"
            >
              <div className="space-y-1">
                {quickActions.map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      router.push(action.href);
                      setIsExpanded(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-primary/10 text-sm"
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}