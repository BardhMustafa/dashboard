import { create } from 'zustand';

export const userStore = create(() => ({
  isAuthenticated: false,
  accessToken: '',
  refereshToken: '',
}));
