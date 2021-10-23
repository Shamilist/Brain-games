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
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const randomOperator = Math.floor(Math.random() * 3);

  const gameQuestion = `${randomNumber1}${operators[randomOperator]}${randomNumber2}`;

  const gamerAnswer = String(calculation(randomNumber1, randomNumber2, operators[randomOperator]));
  return [gameQuestion, gamerAnswer];
};

const gameCalc = () => gameScript(gameRules, gameQuestionAnswer);

export default gameCalc;
