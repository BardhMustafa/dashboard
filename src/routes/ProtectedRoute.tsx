import { Navigate } from 'react-router';
import { authStore } from 'src/store/authStore';

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
