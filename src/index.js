import readlineSync from 'readline-sync';

const gameScript = (gameRules, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log(gameRules);

  for (let item = 0; item < 3; item += 1) {
    const [gameQuestion, gamerAnswer] = gameQuestionAnswer();
    console.log(`Question :${gameQuestion}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === gamerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${gamerAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameScript;
