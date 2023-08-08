import { create } from 'zustand';
import { UserStoreProps } from '@/shared/types/user/auth';

 export const userStore = create<UserStoreProps>(() => ({
  isAuthenticated: true,
  accessToken: '',
  username: '',
  email: '',
  bio:'',
  image:''
}));
