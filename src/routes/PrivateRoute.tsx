import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { authStore } from 'src/store/authStore';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = authStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default PrivateRoute;
