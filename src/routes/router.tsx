import App from '@/App';
import Login from '@/pages/auth/Login';

import { createBrowserRouter } from 'react-router-dom';
import Protected from './Protected';
import { Register } from '@/pages/auth/Register';
import Profile from '@/pages/profile/Profile';
import NotFound from '@/pages/NotFound';
import Articles from '@/pages/articles/Articles';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
