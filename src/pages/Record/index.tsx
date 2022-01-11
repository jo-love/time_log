import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Category from 'utils/Category';
import StopWatch from './Stopwatch';

const Wrapper = styled.main`
  ${(props) => props.theme.positions.flexColumnY};
`;
const SelectBox = styled.ul`
  margin: 100px 0 50px 0;
  width: 53%;
  min-height: 150px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const Item = styled(motion.li)`
  width: 36px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
    text-align: center;
    padding-top: 3px;
  }
`;
const ItemVar = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    fontWeight: 600,
    transition: {
      duraiton: 1,
    },
  },
};

const Record = () => {
  const [clickedItems, setClickedItems] = useState<Category[]>([]);
  const [timerArr, setTimerArr] = useState<number[]>([]);

  const addList = useCallback(
    (i: number) => {
      if (!clickedItems.includes(Category.allCases[i]))
        setClickedItems([...clickedItems, Category.allCases[i]]);
      const temp = timerArr;
      temp.push(0);
      setTimerArr(temp);
    },
    [clickedItems, timerArr],
  );
  return (
    <Wrapper>
      <SelectBox>
        {Category.allCases.map((it, i) => (
          <Item
            onClick={() => addList(i)}
            key={i}
            variants={ItemVar}
            whileHover="hover"
            initial="normal"
          >
            <img src={it.img} alt="icon" />
            <span>{it.name}</span>
          </Item>
        ))}
      </SelectBox>
      {clickedItems.map((list, i) => (
        <StopWatch
          key={i}
          index={i}
          list={list}
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
          timerArr={timerArr}
          setTimerArr={setTimerArr}
        />
      ))}
    </Wrapper>
  );
};

export default Record;
