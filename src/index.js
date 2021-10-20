import readlineSync from 'readline-sync';

const gameScript = (gameRules, gameQuestion, gamerAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log(gameRules);

  for (let item = 0; item < 3; item += 1) {
    const gameQuestion1 = gameQuestion();
    const gamerAnswer1 = gamerAnswer();
    console.log(`Question :${gameQuestion1}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === gamerAnswer1) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${gamerAnswer1}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameScript;
