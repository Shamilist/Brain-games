import readlineSync from 'readline-sync';

const userName = () =>  {
let question = readlineSync.question('May I have your name? ');
console.log ('Hello ,' + question + '!'); 
};

export default userName;
