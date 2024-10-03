import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';

const launchPrime = () => {
  const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    // функция нахождения случайного числа
    const num1 = randomNum(30);

    const questions = `${num1}`;

    const gamePrime = () => {
      if (num1 < 1) return false;

      if (num1 <= 3) return true;

      if (num1 % 2 === 0 || num1 % 3 === 0) return false;

      for (let i = 5; i * i <= num1; i += 6) {
        if (num1 % i === 0 || num1 % (i + 2) === 0) return false;
      }
      return true;
    };
    const correctAnswer = gamePrime(questions) ? 'yes' : 'no';
    return [questions, correctAnswer];
  };
  launchGame(nameGame, taskPrime);
};
export default launchPrime;
