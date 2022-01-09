import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { pauseState } from 'recoil/atoms';
import { pause, play, stop } from 'assets';

const BtnIcon = styled(motion.img)`
  width: 27px;
  margin-left: 35px;
  cursor: pointer;
`;
export const IconVar = {
  hover: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const OperationButtons = () => {
  const [isPaused, setIsPaused] = useRecoilState(pauseState);
  // const [isPaused, setIsPaused] = useState(false);
  const handlePause = () => {
    setIsPaused(true);
  };
  return (
    <div>
      {isPaused ? (
        <BtnIcon
          // onClick={handleClick}
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
  );
};

export default OperationButtons;
