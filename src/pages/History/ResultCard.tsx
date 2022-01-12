import styled from 'styled-components';

const Card = styled.article`
  border: solid blue 1px;
  width: 200px;
`;
const ResultCard = () => {
  return (
    <Card>
      <h2>날짜</h2>
      <div>
        <img />
        <h3>일</h3>
      </div>
    </Card>
  );
};

export default ResultCard;
