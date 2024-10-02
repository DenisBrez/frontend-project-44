import readlineSync from 'readline-sync';

const game = (essenceGame, task) => {
  // определеие функции запроса имени
  const userAdd = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

  console.log(`Hello, ${userAdd}!`);

  // определение функции игры на четность
  console.log(essenceGame);

  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question:', pairOfQuestionAndResult[0]);
    const answer = readlineSync.question('Your answer: ');

    // Константа для правильного ответа
    const rightAnswer = pairOfQuestionAndResult[1];

    // Проверка
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userAdd}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userAdd}!`);
};
export default game;
