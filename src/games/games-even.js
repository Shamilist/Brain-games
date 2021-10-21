/* eslint-disable no-constant-condition */
import gameScript from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestion = () => (Math.floor(Math.random() * 100));

const gamerAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameEven = () => gameScript(gameRules, gameQuestion, gamerAnswer);

export default gameEven;
