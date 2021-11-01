const getRandom = (min, max) => {
  const randomNumber = (Math.random() * (max - min + 1)) + min;
  return Math.floor(randomNumber);
};

export default getRandom;
