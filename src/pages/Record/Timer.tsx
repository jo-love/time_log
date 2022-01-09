interface TimerProps {
  timer: number;
}

const Timer = ({ timer }: TimerProps) => {
  return <span>{timer}</span>;
};

export default Timer;
