import styled from 'styled-components';

import GoogleButton from './GoogleButton';
import { clockClip } from 'assets';

const Container = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
const LoginSection = styled.section`
  position: fixed;
  right: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(225, 152, 185, 0.7);
  h2 {
    padding-top: 10px;
    padding-left: 20px;
    font-size: 50px;
    color: darkmagenta;
  }
`;
const Title = styled.div`
  font-size: 28px;
  text-align: center;
  height: 250px;
  transform: translateY(50%);
`;
const Login = () => {
  return (
    <>
      <Container autoPlay loop muted>
        <source src={clockClip} />
      </Container>
      <LoginSection>
        <h2>Time Log</h2>
        <Title>LOGIN</Title>
        <GoogleButton />
      </LoginSection>
    </>
  );
};

export default Login;
