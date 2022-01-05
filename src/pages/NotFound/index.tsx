import styled from 'styled-components';
import { error } from 'assets';

const Container = styled.div`
  height: 100vh;
  background-color: #0f0807;
  ${(props) => props.theme.positions.flexCenterXY};
  width: 100vw;
  margin: 0 auto;
  img {
    border-right: solid 1px;
    height: 300px;
  }
  p {
    line-height: 1.5;
    margin-left: 20px;
    font-size: 30px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <img src={error} alt="error" />
      <p>
        SORRY!
        <br />
        The Page You're Looking For <br />
        Was Not Found
      </p>
    </Container>
  );
};

export default NotFound;
