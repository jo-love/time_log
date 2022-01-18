export const formatTime = (origin: number) => {
  const seconds = `0${origin % 60}`.slice(-2);
  const minutes = `0${Math.floor(origin / 60) % 60}`.slice(-2);
  const hours = `0${Math.floor(origin / 3600)}`.slice(-2);
  return `${hours} : ${minutes} : ${seconds}`;
};
