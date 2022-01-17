import styled from 'styled-components';

import { ResultCardProps } from './Types';
import { calendar } from 'assets';

const Card = styled.article`
  margin-top: 100px;
  border: solid blue 1px;
  width: 200px;
`;
const DateBox = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;
const ResultCard = ({ record }: ResultCardProps) => {
  return (
    <Card>
      <DateBox>
        <img width={20} src={calendar} alt="calendar" />
        <span>{record.date}</span>
      </DateBox>

      <div>
        {/* <img /> */}
        <h3>일</h3>
      </div>
    </Card>
  );
};

export default ResultCard;
