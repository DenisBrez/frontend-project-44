// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default, import/extensions, import/no-named-as-default-member
import game from '../index.js';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/extensions, import/no-named-as-default, import/no-named-as-default-member
import randomNum from '../getRandomInt.js';

const prime = () => {
  const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    const num1 = randomNum(30);

    // функция нахождения минимального числа.

    const question = `${num1}`;

    const gamePrime = () => {
      if (num1 < 1) return false;

      if (num1 <= 3) return true;

      if (num1 % 2 === 0 || num1 % 3 === 0) return false;

      for (let i = 5; i * i <= num1; i += 6) {
        if (num1 % i === 0 || num1 % (i + 2) === 0) return false;
      }
      return true;
    };
    const correctAnswer = gamePrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  game(nameGame, taskPrime);
};
export default prime;
