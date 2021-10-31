import gameScript from '../index.js';
import getRandom from '../getRandom.js';

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
  const randomNumberStart = 0;
  const ranodmNumberMax = 100;
  const randomOperatorNumber = 3;
  const randomNumber1 = getRandom(randomNumberStart, ranodmNumberMax);
  const randomNumber2 = getRandom(randomNumberStart, ranodmNumberMax);
  const randomOperator = getRandom(randomNumberStart, randomOperatorNumber);

  const gameQuestion = `${randomNumber1} ${operators[randomOperator]} ${randomNumber2}`;

  const gamerAnswer = String(calculation(randomNumber1, randomNumber2, operators[randomOperator]));
  return [gameQuestion, gamerAnswer];
};

const gameCalc = () => gameScript(gameRules, gameQuestionAnswer);

export default gameCalc;
