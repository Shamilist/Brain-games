import readlineSync from 'readline-sync';

const numberOfGames = 3;

const startGameLogic = (gameRules, createGameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log(gameRules);

  for (let item = 0; item < numberOfGames; item += 1) {
    const [gameQuestion, gamerAnswer] = createGameQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer !== gamerAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${gamerAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGameLogic;
