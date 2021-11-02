import gameScript from '../index.js';
import getRandom from '../getRandom.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgressionLength = 9;

const arithmeticProgression = (start, growStep) => {
  const array = [];
  for (let i = 1; i < arithmeticProgressionLength; i += 1) {
    array.push(start + growStep * i);
  }
  return array;
};

const replaceElement = (progression, hiddenIndex) => {
  const newProgression = progression;
  const newHiddenIndex = hiddenIndex;
  newProgression[newHiddenIndex] = '..';
  return newProgression.join(' ');
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
