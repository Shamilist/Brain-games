import gameScript from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gratestDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gratestDivisor(num2, num1 % num2);
};

const gameQuestionAnswer = () => {
  const randomNumber1 = (Math.floor(Math.random() * 100));
  const randomNumber2 = (Math.floor(Math.random() * 100));
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;

  const gamerAnswer = String(gratestDivisor(randomNumber1, randomNumber2));
  return [gameQuestion, gamerAnswer];
};

const gameGcd = () => gameScript(gameRules, gameQuestionAnswer);

export default gameGcd;
