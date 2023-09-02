import { create } from 'zustand';
type UserStoreProps = {
  isAuthenticated: boolean;
  accessToken: string;
  user: { username: string; email: string; bio: string; image: string };
};
export const userStore = create<UserStoreProps>(() => ({
  isAuthenticated: false,
  accessToken: '',
  user: {
    username: '',
    email: '',
    bio: '',
    image: '',
  },
}));
