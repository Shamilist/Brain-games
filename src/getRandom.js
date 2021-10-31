const getRandom = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};

export default getRandom;
