import gameScript from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (start, growStep) => {
  const array = [];
  for (let i = 1; i < 9; i += 1) {
    array.push(start + growStep * i);
  }
  return array;
};

const replaceElement = (arr, arrIndex) => {
  const arr1 = arr;
  const arrIndex1 = arrIndex;
  arr1[arrIndex1] = '..';
  return arr1.join(' ');
};

const gameQuestionAnswer = () => {
  const randomNumberStart = 1;
  const ranodmNumberMax = 10;
  const randomIndexMaxNumber = 8;
  const firstNumber = getRandom(randomNumberStart, ranodmNumberMax);
  const randomGrowStep = getRandom(randomNumberStart, ranodmNumberMax);
  const randomArrIndex = getRandom(randomNumberStart, randomIndexMaxNumber);

  const progression = arithmeticProgression(firstNumber, randomGrowStep);

  const gameQuestion = replaceElement(progression, randomArrIndex);

  const extractedReplaceElement = firstNumber + (randomGrowStep * randomArrIndex) + randomGrowStep;

  const gamerAnswer = String(extractedReplaceElement);

  return [gameQuestion, gamerAnswer];
};

const gameProgression = () => gameScript(gameRules, gameQuestionAnswer);

export default gameProgression;
