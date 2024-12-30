import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'admin' | 'manager' | 'staff';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
}

interface UserStore {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user) =>
        set((state) => ({
          users: [...state.users, { ...user, id: crypto.randomUUID() }],
        })),
      updateUser: (id, user) =>
        set((state) => ({
          users: state.users.map((u) =>
            u.id === id ? { ...u, ...user } : u
          ),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);