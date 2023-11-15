import { Outlet, Navigate } from 'react-router-dom';
import routes from './routes';
import { useAuth } from '../contexts/authContext';
import Spinner from '../components/atoms/Spinner/Spinner';

const PrivateRoutes = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to={routes.login} />;
};

export default PrivateRoutes;
