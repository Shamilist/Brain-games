import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const question = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${question}!`);
};

export default userName;
