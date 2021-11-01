import gameScript from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
};

const gameQuestionAnswer = () => {
  const randomNumberStart = 1;
  const ranodmNumberMax = 100;
  const gameQuestion = getRandom(randomNumberStart, ranodmNumberMax);
  const gamerAnswer = isNumberPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, gamerAnswer];
};

const gamePrime = () => gameScript(gameRules, gameQuestionAnswer);

export default gamePrime;
