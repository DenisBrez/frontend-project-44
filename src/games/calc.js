import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';

const launchCalc = () => {
  const nameGame = 'What is the result of the expression?';
  const taskCalc = () => {

    // Функция нахождения случайного числа
    const num1 = randomNum(30);
    const num2 = randomNum(20);

    // функция нахождения случайного математического числа
    const signs = ['+', '-', '*'];
    const sign = signs[randomNum(3)];

    const question = `${num1} ${sign} ${num2}`;

    let result = 0;
    switch (sign) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    return [question, String(result)];
  };
  launchGame(nameGame, taskCalc);
};
export default launchCalc;
