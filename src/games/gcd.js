import launchGame from '../index.js';

import getRandomNumber from '../getRandomMinMax.js';

const searchDivider = (num1, num2) => {
  // функция нахождения минимального/максимального числа
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);
  // функция нахождения НОД
  for (let j = minNum; j > 0; j -= 1) {
    if (minNum % j === 0 && maxNum % j === 0) {
      return j;
    }
  }
  return minNum;
};

const launchGcd = () => {
  const nameGame = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
		const minLimitRandomNum = 1;
		const limitRandomNum1 = 30;
		const limitRandomNum2 = 50;
    // функция нахождения случайного числа
    const num1 = getRandomNumber(minLimitRandomNum, limitRandomNum1);
    const num2 = getRandomNumber(minLimitRandomNum, limitRandomNum2);

    const question = `${num1} ${num2}`;
    const gameGcd = String(searchDivider(num1, num2));
    return [question, gameGcd];
  };
  launchGame(nameGame, taskGcd);
};
export default launchGcd;
