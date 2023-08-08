import { ProtectedProps } from '@/shared/types/routes';
import { userStore } from '@/store/store';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }: ProtectedProps) => {
  const { isAuthenticated } = userStore();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
