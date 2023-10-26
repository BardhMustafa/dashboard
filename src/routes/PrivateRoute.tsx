import { Navigate } from 'react-router';
import { authStore } from 'src/store/authStore';

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
