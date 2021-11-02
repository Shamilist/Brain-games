import startGameLogic from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'What is the result of the expression?';

const makeCount = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operation ${operator} is not supported.`);
  }
};

const operators = ['+', '-', '*'];

const createGameQuestionAnswer = () => {
  const randomOperatorNumber = 2;
  const randomNumber1 = getRandom(0, 100);
  const randomNumber2 = getRandom(0, 100);
  const randomOperator = getRandom(0, randomOperatorNumber);

  const gameQuestion = `${randomNumber1} ${operators[randomOperator]} ${randomNumber2}`;

  const gamerAnswer = String(makeCount(randomNumber1, randomNumber2, operators[randomOperator]));
  return [gameQuestion, gamerAnswer];
};

const startGameCalc = () => startGameLogic(gameRules, createGameQuestionAnswer);

export default startGameCalc;
