/* eslint-disable no-console */
import readlineSync from "readline-sync";

const game = (essenseGame, task) => {
  // определеие функции запроса имени
  const userAdd = readlineSync.question(
    "Welcome to the Brain Games! \nMay I have your name? "
  );

  // определение функци приветствия
  const userName = userAdd;

  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);

  // определение функции случайного числа
  // eslint-disable-next-line no-unused-vars
  const randomNum = (max) => Math.floor(Math.random() * max);

  // определение функции игры на четность
  // eslint-disable-next-line no-console
  console.log(essenseGame);

  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log("Question:", pairOfQuestionAndResult[0]);
    const answerr = readlineSync.question("Your answer: ");

    // Константа для правильного ответа
    const rightAnswer = pairOfQuestionAndResult[1];

    // Проверка
    if (answerr === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `"${answerr}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default game;
