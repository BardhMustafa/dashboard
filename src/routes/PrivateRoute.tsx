import { authStore } from '@/store/authStore';
import { Navigate } from 'react-router';

type PrivateRouteProps = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = authStore();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
