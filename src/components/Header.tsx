import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { googleSignOut } from 'api/Firebase';
import { useSetRecoilState } from 'recoil';
import { tokenState } from 'recoil/atoms';

const Nav = styled(motion.nav)`
  position: fixed;
  ${(props) => props.theme.positions.flexCenterY};
  justify-content: space-between;
  height: 55px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  h2 {
    color: darkmagenta;
    padding-left: 10px;
    font-size: 20px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding: 0;
    font-size: 14px;
  }
  li {
    position: relative;
  }
`;
const Mark = styled(motion.span)`
  position: absolute;
  bottom: -10px;
  width: 60px;
  height: 6px;
  border-radius: 5px;
  background-color: white;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-right: -6px;
`;
const Logout = styled.span`
  font-size: 11px;
  padding-right: 10px;
  cursor: pointer;
`;
const navVar = {
  initial: {
    background: 'rgb(186, 171, 218)',
  },
  scroll: {
    background: 'rgb(161, 140, 209)',
  },
};
const Header = () => {
  const setToken = useSetRecoilState(tokenState);
  const recordMatch = useMatch('/record');
  const historyMatch = useMatch('/history');
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('initial');
      }
    });
  });
  const signOut = () => {
    setToken(null);
    googleSignOut();
  };
  return (
    <>
      <Nav variants={navVar} initial="initial" animate={navAnimation}>
        <h2> Time Log</h2>
        <ul>
          <li>
            <Link to="/record">
              기록하기
              {recordMatch && <Mark layoutId="line" />}
            </Link>
          </li>
          <li>
            <Link to="/history">
              히스토리
              {historyMatch && <Mark layoutId="line" />}
            </Link>
          </li>
        </ul>
        <Logout onClick={signOut}>로그아웃</Logout>
      </Nav>
    </>
  );
};

export default Header;
