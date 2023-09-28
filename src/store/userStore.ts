import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type AuthStore = {
  isAuthenticated: boolean;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

type MyPersist = (
  config: StateCreator<AuthStore>,
  options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>

 export const userStore = create<AuthStore, []>(
  (persist as MyPersist)(
    (set, get): AuthStore => ({
      accessToken: null,
      isAuthenticated: false,
      setAccessToken: (token: string) => set((state) => ({ accessToken: token, 
        isAuthenticated: true })),
      logout: () => set((state) => ({ accessToken: null, isAuthenticated: false })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);


