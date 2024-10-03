import readlineSync from 'readline-sync';

const launchGame = (essenceGame, game) => {
  // определеие функции запроса имени
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

  console.log(`Hello, ${userName}!`);

  // определение функции игры на четность
  console.log(essenceGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = game();

    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');

    // Проверка
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default launchGame;
