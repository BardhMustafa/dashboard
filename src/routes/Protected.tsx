import { IProtectedProps } from '@/shared/types/routes';
import { IUserAuth } from '@/shared/types/user/auth';
import { userStore } from '@/store/store';
import { Navigate } from 'react-router';
const Protected = ({ children }: IProtectedProps) => {
  const { isAuthenticated } = userStore();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
