import styled from 'styled-components';

import { IDataForTotal, ResultCardProps } from './Types';
import { formatTime } from 'utils/TimeFormatter';
import { processAnotherData } from 'utils/ProcessingData';
import { calendar } from 'assets';

const Card = styled.article`
  width: 270px;
  height: fit-content;
  span {
    color: black;
    font-size: 14px;
  }
  ul {
    border-bottom: solid darkmagenta 2px;
  }
`;
const DateBox = styled.div`
  ${(props) => props.theme.positions.spaceBetween};
  background-color: rgb(172, 151, 216);
  padding: 0 20px;
  height: 35px;
  div {
    margin-top: 5px;

    span {
      margin-left: 10px;
      color: ${(props) => props.theme.colors.white};
    }
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  padding-top: 5px;
  div {
    ${(props) => props.theme.positions.flexCenterY};
    margin-left: 5px;
  }
`;
const ResultCard = ({ record }: ResultCardProps) => {
  const total = processAnotherData(record);
  const sumTime = (el: IDataForTotal) => {
    return formatTime(el.timer.reduce((prev, cur) => prev + cur, 0));
  };
  return (
    <Card>
      <DateBox>
        <div>
          <img width={20} src={calendar} alt="calendar" />
          <span>{record.date}</span>
        </div>
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
        {total.map((el, i) => (
          <div key={i}>
            <img width={25} src={el.img} alt="img" />
            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
              {sumTime(el)}
            </span>
          </div>
        ))}
      </Total>
    </Card>
  );
};

export default ResultCard;
