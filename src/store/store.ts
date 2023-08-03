import { create } from 'zustand';
import { IUserAuth } from '@/shared/types/user/auth';

 export const userStore = create<IUserAuth>((set) => ({
  isAuthenticated: true,
  accessToken: '',
  refreshToken: '',
}));
