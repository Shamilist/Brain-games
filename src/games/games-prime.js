import startGameLogic from '../index.js';
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

const createGameQuestionAnswer = () => {
  const gameQuestion = getRandom(1, 100);
  const gamerAnswer = isNumberPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, gamerAnswer];
};

const startGamePrime = () => startGameLogic(gameRules, createGameQuestionAnswer);

export default startGamePrime;
