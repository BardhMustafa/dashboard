import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import App from 'src/App';
import Articles from 'src/pages/articles/Articles';
import Login from 'src/pages/auth/Login';
import Profile from 'src/pages/profile/Profile';
import NotFound from 'src/pages/NotFound';

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
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
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
