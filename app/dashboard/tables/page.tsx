'use client';

import { motion } from 'framer-motion';
import { useTableStore } from '@/lib/store/use-table-store';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const statusColors = {
  available: 'bg-green-500',
  occupied: 'bg-red-500',
  reserved: 'bg-yellow-500',
  billing: 'bg-blue-500',
};

export default function TablesPage() {
  const { tables, updateTableStatus } = useTableStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tables</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {tables.map((table) => (
          <motion.div
            key={table.id}
            layout
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Table {table.number}</h3>
                  <Badge className={statusColors[table.status]}>
                    {table.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Capacity: {table.capacity} people
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {table.status === 'available' && (
                    <Button
                      size="sm"
                      onClick={() => updateTableStatus(table.id, 'occupied')}
                    >
                      Occupy
                    </Button>
                  )}
                  {table.status === 'occupied' && (
                    <Button
                      size="sm"
                      onClick={() => updateTableStatus(table.id, 'billing')}
                    >
                      Bill
                    </Button>
                  )}
                  {table.status === 'billing' && (
                    <Button
                      size="sm"
                      onClick={() => updateTableStatus(table.id, 'available')}
                    >
                      Clear
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateTableStatus(table.id, 'reserved')}
                  >
                    Reserve
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}