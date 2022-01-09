import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Category from 'utils/Category';
import Timer from './Timer';
import { pause, play, stop, close } from 'assets';

const Container = styled.div`
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
  margin-left: 35px;
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
  setClickedItems: (arr: Category[]) => void;
  list: Category;
}

const StopWatch = ({ list, clickedItems, setClickedItems }: StopWatchProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);
  console.log(clickedItems, 'arr');
  useEffect(() => {
    let increment = 0;
    if (!isPaused) {
      increment = window.setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(increment);
    }
    return () => {
      clearInterval(increment);
    };
  }, [isPaused]);
  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };
  const removeItem = (code: string) => {
    setClickedItems(clickedItems.filter((it) => it.code !== code));
  };
  console.log(timer, 'timer');
  return (
    <Container>
      <div>
        <img width={36} src={list.img} alt={list.name} />
        <h3>{list.name}</h3>
      </div>
      <Timer timer={timer} />
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
        <BtnIcon variants={IconVar} whileHover="hover" src={stop} />
      </div>
      {/* <OperationButtons /> */}
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
