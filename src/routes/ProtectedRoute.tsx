import { authStore } from '@/store/authStore';
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  children: JSX.Element;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = authStore();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
