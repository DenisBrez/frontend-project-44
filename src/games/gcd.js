import launchGame from '../index.js';

import getRandomNumber from '../getRandomMinMax.js';

const launchGcd = () => {
  const nameGame = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    // функция нахождения случайного числа
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 50);

    const question = `${num1} ${num2}`;

    const gameGcd = () => {
      // функция нахождения минимального/максимального числа
      const minNum = Math.min(num1, num2);
      const maxNum = Math.max(num1, num2);

      for (let j = minNum; j > 0; j -= 1) {
        if (minNum % j === 0 && maxNum % j === 0) {
          return j;
        }
      }
      return minNum;
    };
    return [question, String(gameGcd())];
  };
  launchGame(nameGame, taskGcd);
};
export default launchGcd;
