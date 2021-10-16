import readlineSync from 'readline-sync';

const userName = () => {
  const question = readlineSync.question('May I have your name? ');
  return (`Hello ,${question}!`);
};

export default userName;
