import { IUserAuth } from '@/shared/types/user/auth';
import { create } from 'zustand';

 export const userStore = create<IUserAuth>((set) => ({
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
}));
