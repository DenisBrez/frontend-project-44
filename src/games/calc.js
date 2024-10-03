import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';
// функция расчета математическй операци
const calculate = (num1, oper, num2) => {
  let result = null;
  switch (oper) {
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
  }
  return result;
};

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
    const answer = String(calculate(num1, sign, num2));
    return [question, answer];
  };
  launchGame(nameGame, taskCalc);
};
export default launchCalc;
