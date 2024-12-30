'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products, orders, tables..."
          className="pl-9 pr-4 h-9 md:h-10 w-full bg-muted/50 focus:bg-background transition-colors"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg border border-border p-2 z-50"
          >
            <div className="text-sm text-muted-foreground p-2">
              Start typing to search...
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}