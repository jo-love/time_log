import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Category from 'utils/Category';
import { formatTime } from 'utils/Timer';
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
interface StopWatchProps {
  clickedItems: Category[];
  setClickedItems: Function;
  list: Category;
  index: number;
  timerArr: number[];
  setTimerArr: Function;
}

const StopWatch = ({
  list,
  clickedItems,
  setClickedItems,
  timerArr,
  setTimerArr,
  index,
}: StopWatchProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let increment = 0;
    if (!isPaused) {
      increment = window.setInterval(() => {
        setTime((prev) => prev + 1);
        let newTimerArr = timerArr;
        newTimerArr[index] = timerArr[index] + 1;
        setTimerArr(newTimerArr);
      }, 1000);
    } else {
      clearInterval(increment);
    }
    return () => {
      clearInterval(increment);
    };
  }, [index, isPaused, setTimerArr, timerArr]);

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const removeItem = (code: string) => {
    setClickedItems(clickedItems.filter((it) => it.code !== code));

    let newTimerArr = timerArr;
    newTimerArr.splice(index, 1);
    setTimerArr(newTimerArr);
  };

  const handleRecord = () => {
    console.log('make array for record');
  };

  return (
    <Container transition={{ type: 'lenear' }}>
      <div>
        <img width={36} src={list.img} alt={list.name} />
        <h3>{list.name}</h3>
      </div>
      <span>{formatTime(timerArr[index])}</span>
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
          disabled={time === 0}
        >
          <BtnIcon variants={IconVar} whileHover="hover" src={stop} />
        </button>
      </div>
      <BtnIcon
        onClick={() => removeItem(list.code)}
        variants={IconVar}
        whileHover="hover"
        src={close}
      />
    </Container>
  );
};

export default StopWatch;
