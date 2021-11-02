import startGameLogic from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const createGameQuestionAnswer = () => {
  const gameQuestion = getRandom(1, 100);
  const gamerAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gamerAnswer];
};

const startGameEven = () => startGameLogic(gameRules, createGameQuestionAnswer);

export default startGameEven;
