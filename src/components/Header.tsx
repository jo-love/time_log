import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  ${(props) => props.theme.positions.flexCenterY};
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  h2 {
    font-family: 'The Nautigal';
    color: darkmagenta;
    padding-left: 10px;
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
const Header = () => {
  const recordMatch = useMatch('/record');
  const historyMatch = useMatch('/history');
  console.log(recordMatch, 'true');
  return (
    <Nav>
      <h2> Time Log</h2>
      <ul>
        <li>
          <Link to="/record">
            기록하기
            {recordMatch && <Mark layoutId="circle" />}
          </Link>
        </li>
        <li>
          <Link to="/history">
            히스토리
            {historyMatch && <Mark layoutId="circle" />}
          </Link>
        </li>
      </ul>
      <Logout>로그아웃</Logout>
    </Nav>
  );
};

export default Header;
