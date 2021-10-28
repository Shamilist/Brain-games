import gameScript from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
};

const gameQuestionAnswer = () => {
  const gameQuestion = (Math.floor(Math.random() * 100));
  const gamerAnswer = isNumberPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, gamerAnswer];
};

const gamePrime = () => gameScript(gameRules, gameQuestionAnswer);

export default gamePrime;
