import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Protected from './ProtectedRoute';
import Profile from '@/pages/profile/Profile';
import NotFound from '@/pages/NotFound';
import Articles from '@/pages/articles/Articles';
import PrivateRoute from './PrivateRoute';

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

    element: (
      <Protected>
        <Login />
      </Protected>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
