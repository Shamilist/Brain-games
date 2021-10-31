import gameScript from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const randomNumberStart = 1;
  const ranodmNumberMax = 100;
  const gameQuestion = getRandom(randomNumberStart, ranodmNumberMax);
  const gamerAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gamerAnswer];
};

const gameEven = () => gameScript(gameRules, gameQuestionAnswer);

export default gameEven;
