import { Navigate } from 'react-router';
import Header from 'components/Header';

interface Props {
  children: React.ReactElement;
}
const PrivateRoute = ({ children }: Props) => {
  const tempAuth = true;
  return tempAuth ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
