import { create } from 'zustand';
type UserStoreProps = {
  isAuthenticated: boolean;
  accessToken: string;
  user: { username: string; email: string; bio: string; image: string };
};
export const userStore = create<UserStoreProps>(() => ({
  isAuthenticated: true,
  accessToken: '',
  user: {
    username: '',
    email: '',
    bio: '',
    image: '',
  },
}));
