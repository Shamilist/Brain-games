import gameScript from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGratestDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGratestDivisor(num2, num1 % num2);
};

const gameQuestionAnswer = () => {
  const randomNumberStart = 1;
  const ranodmNumberMax = 100;
  const randomNumber1 = getRandom(randomNumberStart, ranodmNumberMax);
  const randomNumber2 = getRandom(randomNumberStart, ranodmNumberMax);
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;

  const gamerAnswer = String(findGratestDivisor(randomNumber1, randomNumber2));
  return [gameQuestion, gamerAnswer];
};

const gameGcd = () => gameScript(gameRules, gameQuestionAnswer);

export default gameGcd;
