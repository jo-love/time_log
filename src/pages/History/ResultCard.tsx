import styled from 'styled-components';

import { ResultCardProps } from './Types';
import { formatTime } from 'utils/TimeFormatter';
import { calendar } from 'assets';
import { makeData } from 'utils/ProcessingData';

const Card = styled.article`
  width: 270px;
  height: fit-content;
  span {
    color: black;
    font-size: 14px;
  }
  ul {
    border-bottom: solid #9000ffe1 2px;
  }
`;
const DateBox = styled.div`
  ${(props) => props.theme.positions.flexCenterY};
  background-color: ${(props) => props.theme.colors.primary};
  height: 35px;
  img {
    margin-left: 20px;
  }
  span {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.white};
  }
`;
const List = styled.li`
  ${(props) => props.theme.positions.spaceAround};
  align-items: center;
  margin: 10px 0;

  div {
    ${(props) => props.theme.positions.flexCenterY};
  }
`;
const Total = styled.div`
  ${(props) => props.theme.positions.flexCenterY};
  height: 45px;
  div {
    ${(props) => props.theme.positions.flexCenterY};
    margin-left: 5px;
  }
`;
const ResultCard = ({ record }: ResultCardProps) => {
  const total = makeData(record.infoByDate);

  return (
    <Card>
      <DateBox>
        <img width={20} src={calendar} alt="calendar" />
        <span>{record.date}</span>
      </DateBox>
      <ul>
        {record.infoByDate.map((info, i) => (
          <List key={i}>
            <div>
              <img width={25} src={info.img} alt="img" />
              <span style={{ marginLeft: '5px' }}>{info.name}</span>
            </div>
            <div>
              <span>{info.startAt}&nbsp;-</span>&nbsp;
              <span>{info.endAt}</span>
            </div>
            <span>{formatTime(info.timer)}</span>
          </List>
        ))}
      </ul>
      <Total>
        {total.map((el: any, i: number) => (
          <div key={i}>
            <img width={25} src={el.img} alt="img" />
            <span>
              :{el.timer.reduce((prev: any, cur: any) => prev + cur, 0)}
            </span>
          </div>
        ))}
      </Total>
    </Card>
  );
};

export default ResultCard;
