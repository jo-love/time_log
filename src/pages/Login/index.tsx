import styled from 'styled-components';
import { clockClip, google_logo } from 'assets';
import { motion } from 'framer-motion';

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
`;

const Title = styled.div`
  font-size: 28px;
  text-align: center;
  height: 250px;
  transform: translateY(50%);
`;
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
    /* color: ${(props) => props.theme.colors.white}; */
  }
`;

const textVar = {
  initial: {
    fill: 'rgba(250,250,250, 1)',
  },
  active: {
    fillOpacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
    },
  },
};

const Login = () => {
  return (
    <>
      <Container autoPlay loop muted>
        <source src={clockClip} />
      </Container>
      <LoginSection>
        <svg
          stroke="darkmagenta"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <motion.text
            variants={textVar}
            initial="initial"
            whileHover="active"
            fontSize={50}
            x="33"
            y="60"
          >
            Time Log
          </motion.text>
        </svg>
        <Title>LOGIN</Title>
        <Button>
          <img width={30} src={google_logo} alt="google" />
          <span>구글 로그인</span>
        </Button>
      </LoginSection>
    </>
  );
};

export default Login;
