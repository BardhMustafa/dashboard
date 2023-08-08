import { ProtectedProps } from '@/shared/types/routes';
import { userStore } from '@/store/store';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: ProtectedProps) => {
  const { isAuthenticated } = userStore();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
