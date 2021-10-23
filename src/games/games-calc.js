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

const gameQuestionAnswer = () => {
  const rundomNumber1 = Math.floor(Math.random() * 100);
  const rundomNumber2 = Math.floor(Math.random() * 100);
  const rundomOperator = Math.floor(Math.random() * 3);

  const gameQuestion = `${rundomNumber1}${operators[rundomOperator]}${rundomNumber2}`;

  const gamerAnswer = String(calculation(rundomNumber1, rundomNumber2, operators[rundomOperator]));
  return [gameQuestion, gamerAnswer];
};

const gameCalc = () => gameScript(gameRules, gameQuestionAnswer);

export default gameCalc;
