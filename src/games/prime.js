import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';

import searchPrimeNumber from '../searchPrimeNumber.js';

const launchPrime = () => {
  const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    // функция нахождения случайного числа
    const num1 = randomNum(30);

    const questions = `${num1}`;

    const correctAnswer = searchPrimeNumber(questions) ? 'yes' : 'no';
    return [questions, correctAnswer];
  };
  launchGame(nameGame, taskPrime);
};
export default launchPrime;
