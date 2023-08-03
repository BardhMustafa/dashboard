import { userStore } from '@/store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const { isAuthenticated } = userStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);
  return <div>Login</div>;
};

export default Login;
