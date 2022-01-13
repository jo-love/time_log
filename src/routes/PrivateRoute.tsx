import { Navigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import Header from 'components/Header';
import { tokenState } from 'recoil/atoms';

interface Props {
  children: React.ReactElement;
}
const PrivateRoute = ({ children }: Props) => {
  const isLogin = useRecoilValue(tokenState);
  return isLogin ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
