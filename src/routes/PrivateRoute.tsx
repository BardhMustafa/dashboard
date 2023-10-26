import { userStore } from '@/store/userStore';
import { Navigate } from 'react-router';

type PrivateRouteProps = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = userStore();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
