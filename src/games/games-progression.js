import gameScript from '../index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (start, growStep) => {
  const array = [];
  for (let i = 1; i < 9; i += 1) {
    array.push(start + growStep * i);
  }
  return array;
};

const gameQuestionAnswer = () => {
  const firstNumber = (Math.floor(Math.random() * 10));
  const randomGrowStep = (Math.floor(Math.random() * 10));
  const randomArrIndex = (Math.floor(Math.random() * 8));

  const progression = arithmeticProgression(firstNumber, randomGrowStep);

  const replaceElement = (arr, arrIndex) => {
    const arr1 = arr;
    const arrIndex1 = arrIndex;
    arr1[arrIndex1] = '..';
    return arr1.join(' ');
  };

  const gameQuestion = replaceElement(progression, randomArrIndex);

  const extractedReplaceElement = firstNumber + (randomGrowStep * randomArrIndex) + randomGrowStep;

  const gamerAnswer = String(extractedReplaceElement);

  return [gameQuestion, gamerAnswer];
};

const gameProgression = () => gameScript(gameRules, gameQuestionAnswer);

export default gameProgression;
