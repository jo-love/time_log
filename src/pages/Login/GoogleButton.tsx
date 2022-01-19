import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { auth, signInGoogle } from 'api/Firebase';
import { tokenState, userEmailState } from 'recoil/atoms';
import { google_logo } from 'assets';

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
  const setToken = useSetRecoilState(tokenState);
  const setEmail = useSetRecoilState(userEmailState);
  const navigate = useNavigate();

  useEffect(() => {
    // observer for changes to the user's sign-in state
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const getEmail = firebaseUser.email;
        const getToken = await firebaseUser.getIdToken();
        setToken(getToken);
        setEmail(getEmail);
        navigate('/record');
      }
    });
  });
  return (
    <Button onClick={signInGoogle}>
      <img width={30} src={google_logo} alt="google" />
      <span>구글 로그인</span>
    </Button>
  );
};

export default GoogleButton;
