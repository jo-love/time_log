import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Category from 'utils/Category';
import { formatTime } from 'utils/Timer';
import { StopWatchProps } from './Types';
import { db } from 'api/Firebase';
import { userEmailState } from 'recoil/atoms';
import { pause, play, stop, close } from 'assets';

const Container = styled(motion.div)`
  ${(props) => props.theme.positions.spaceAround};
  align-items: center;
  width: 53%;
  height: 48px;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.pastelBlue};
  transform-origin: right center;
  div:first-child {
    ${(props) => props.theme.positions.flexCenterY};
    h3 {
      margin-left: 10px;
      font-weight: 500;
    }
  }
`;
const BtnIcon = styled(motion.img)`
  width: 28px;
  cursor: pointer;
`;
const IconVar = {
  hover: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const StopWatch = ({ selectedIdx, removeList }: StopWatchProps) => {
  const userEmail = useRecoilValue(userEmailState);
  const list = Category.allCases[selectedIdx];
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [date, setDate] = useState({});
  const [startAt, setStartAt] = useState('');

  useEffect(() => {
    const now = new Date();
    const currentDate =
      now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
    const currentTime = now.getHours() + ':' + now.getMinutes();
    setDate(currentDate);
    setStartAt(currentTime);
  }, []);

  // 변수 list = 삭제 문제 X -> 타임 렌더 문제 O
  // 상태 list = 삭제 문제 O -> 타임 렌더 문제 X
  useEffect(() => {
    let increment = 0;
    if (!isPaused) {
      increment = window.setInterval(() => {
        if (typeof list.timer === 'number') list.timer++;
        setTimer((prev: number) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(increment);
    };
  }, [isPaused, list]);

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleRemove = (selectedIdx: number) => {
    list.timer = 0;
    removeList(selectedIdx);
  };

  const handleRecord = () => {
    handleRemove(selectedIdx);

    const now = new Date();
    const endAt = now.getHours() + ':' + now.getMinutes();
    const result = {
      name: list.name,
      img: list.img,
      timer: timer,
      date: date,
      startAt: startAt,
      endAt: endAt,
      identifier: userEmail,
    };
    console.log(result);

    db.collection('logInfo').add(result);
  };
  // console.log(userEmail, 'e');
  return (
    <Container>
      <div>
        <img width={36} src={list.img} alt={list.name} />
        <h3>{list.name}</h3>
      </div>
      <span>{typeof list.timer === 'number' && formatTime(list.timer)}</span>
      <div>
        {isPaused ? (
          <BtnIcon
            onClick={handlePause}
            variants={IconVar}
            whileHover="hover"
            src={play}
          />
        ) : (
          <BtnIcon
            onClick={handlePause}
            variants={IconVar}
            whileHover="hover"
            src={pause}
          />
        )}
        <button
          onClick={handleRecord}
          style={{ marginLeft: '25px', background: 'transparent' }}
          disabled={timer === 0}
        >
          <BtnIcon variants={IconVar} whileHover="hover" src={stop} />
        </button>
      </div>
      <BtnIcon
        onClick={() => handleRemove(selectedIdx)}
        variants={IconVar}
        whileHover="hover"
        src={close}
      />
    </Container>
  );
};

export default StopWatch;
