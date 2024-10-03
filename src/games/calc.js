import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';
// функция расчета математическй операци
const calculate = (num1, oper, num2) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${oper}'!`);
  }
};

const launchCalc = () => {
  const nameGame = 'What is the result of the expression?';

  const taskCalc = () => {
    const limitRandomNum1 = 30;
    const limitRandomNum2 = 20;

    // Функция нахождения случайного числа
    const num1 = randomNum(limitRandomNum1);
    const num2 = randomNum(limitRandomNum2);

    // функция нахождения случайного математического числа
    const signs = ['+', '-', '*'];
    const sign = signs[randomNum(signs.length)];

    const question = `${num1} ${sign} ${num2}`;
    const answer = String(calculate(num1, sign, num2));
    return [question, answer];
  };
  launchGame(nameGame, taskCalc);
};
export default launchCalc;
