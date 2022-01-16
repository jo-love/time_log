import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { auth, signInGoogle } from 'api/Firebase';
import { defaultHeaders } from 'utils/clientConfig';
import { tokenState, userState } from 'recoil/atoms';
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
  // const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);
  const navigate = useNavigate();

  useEffect(() => {
    // observer for changes to the user's sign-in state
    auth.onAuthStateChanged(async (firebaseUser) => {
      console.log(firebaseUser, 'user');
      if (firebaseUser) {
        const getToken = await firebaseUser.getIdToken();
        setToken(getToken);
        navigate('/record');
        // defaultHeaders.Authorization = `Bearer${token}`;

        // const res = await fetch('users/me', {
        //   method: 'GET',
        //   headers: defaultHeaders,
        // });
        // if (res.status === 200) {
        //   const user = await res.json();
        //   console.log(user);
        //   setUser(user);
        // } else {
        //   delete defaultHeaders.Authorization;
        //   setUser(null);
        // }
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
