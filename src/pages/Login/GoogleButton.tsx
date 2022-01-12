import styled from 'styled-components';

import { signInGoogle } from 'utils/FirebaseAuth';
import { google_logo } from 'assets';

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// if (!clientId) {
//   throw new Error('Google token is not set');
// }

const Button = styled.button`
  ${(props) => props.theme.positions.flexCenterY};
  margin: 0 auto;
  width: 330px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  img {
    margin-left: 15px;
  }
  span {
    transform: translateX(70px);
    letter-spacing: 3px;
    font-weight: 600;
    color: black;
  }
`;
const GoogleButton = () => {
  return (
    <Button onClick={signInGoogle}>
      <img width={30} src={google_logo} alt="google" />
      <span>구글 로그인</span>
    </Button>
  );
};

export default GoogleButton;
