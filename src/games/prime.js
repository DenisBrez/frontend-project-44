import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';

// функция нахождения простого числа
const searchPrimeNumber = (num1) => {
  if (num1 < 1) return false;

  if (num1 <= 3) return true;

  if (num1 % 2 === 0 || num1 % 3 === 0) return false;

  for (let i = 5; i * i <= num1; i += 6) {
    if (num1 % i === 0 || num1 % (i + 2) === 0) return false;
  }
  return true;
};

const launchPrime = () => {
  const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
		const limitRandomNum = 30;
    // функция нахождения случайного числа
    const num1 = randomNum(limitRandomNum);

    const questions = `${num1}`;

    const correctAnswer = searchPrimeNumber(questions) ? 'yes' : 'no';
    return [questions, correctAnswer];
  };
  launchGame(nameGame, taskPrime);
};
export default launchPrime;
