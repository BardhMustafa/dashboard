import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { authStore } from 'src/store/authStore';

type ProtectedRouteProps = {
  children: JSX.Element;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = authStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  return children;
};

export default ProtectedRoute;
