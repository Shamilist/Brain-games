import gameScript from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const operators = ['+', '-', '*'];

const rundomNumber1 = Math.floor(Math.random() * 100);
const rundomNumber2 = Math.floor(Math.random() * 100);
const rundomOperator = Math.floor(Math.random() * 3);

const gameQuestion = () => `${rundomNumber1}${operators[rundomOperator]}${rundomNumber2}`;

const gamerAnswer = () => {
  const gamerAnswer1 = String(calculation(rundomNumber1, rundomNumber2, operators[rundomOperator]));
  return gamerAnswer1;
};

const gameCalc = () => gameScript(gameRules, gameQuestion, gamerAnswer);

export default gameCalc;
