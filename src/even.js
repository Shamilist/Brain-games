import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = () => Math.floor(Math.random() * 100);
  for (let item = 1; item <= 3; item += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (playerAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${userName}!)`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (playerAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!)`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
export default gameEven;
