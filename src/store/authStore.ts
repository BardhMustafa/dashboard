import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type AuthStore = {
  isAuthenticated: boolean;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
};

type MyPersist = (
  config: StateCreator<AuthStore>,
  options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>;

export const authStore = create<AuthStore, []>(
  (persist as MyPersist)(
    (set, get): AuthStore => ({
      accessToken: null,
      isAuthenticated: false,
      setAccessToken: (token: string) => {
        set((state) => ({ accessToken: token, isAuthenticated: true }));
      },
      removeAccessToken: () =>
        set((state) => ({ accessToken: null, isAuthenticated: false })),
     }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
