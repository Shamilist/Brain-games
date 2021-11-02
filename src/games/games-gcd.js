import startGameLogic from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGratestDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGratestDivisor(number2, number1 % number2);
};

const createGameQuestionAnswer = () => {
  const randomNumber1 = getRandom(1, 100);
  const randomNumber2 = getRandom(1, 100);
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;

  const gamerAnswer = String(findGratestDivisor(randomNumber1, randomNumber2));
  return [gameQuestion, gamerAnswer];
};

const startGameGcd = () => startGameLogic(gameRules, createGameQuestionAnswer);

export default startGameGcd;
