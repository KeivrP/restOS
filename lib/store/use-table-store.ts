import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TableStatus = 'available' | 'occupied' | 'reserved' | 'billing';

interface Table {
  id: string;
  number: number;
  capacity: number;
  status: TableStatus;
  orderId?: string;
}

interface TableStore {
  tables: Table[];
  addTable: (table: Omit<Table, 'id'>) => void;
  updateTableStatus: (id: string, status: TableStatus) => void;
  deleteTable: (id: string) => void;
}

export const useTableStore = create<TableStore>()(
  persist(
    (set) => ({
      tables: [],
      addTable: (table) =>
        set((state) => ({
          tables: [...state.tables, { ...table, id: crypto.randomUUID() }],
        })),
      updateTableStatus: (id, status) =>
        set((state) => ({
          tables: state.tables.map((t) =>
            t.id === id ? { ...t, status } : t
          ),
        })),
      deleteTable: (id) =>
        set((state) => ({
          tables: state.tables.filter((t) => t.id !== id),
        })),
    }),
    {
      name: 'table-storage',
    }
  )
);