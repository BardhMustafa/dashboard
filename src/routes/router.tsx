import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Protected from './Protected';
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
    path: '/login',
    element: <Login />,
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
    path: '*',
    element: <NotFound />,
  },
]);
