import gameScript from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const gameQuestion = (Math.floor(Math.random() * 100));
  const gamerAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gamerAnswer];
};

const gameEven = () => gameScript(gameRules, gameQuestionAnswer);

export default gameEven;
