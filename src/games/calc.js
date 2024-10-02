import game from '../index.js';

import randomNum from '../getRandomInt.js';

const calc = () => {
  const nameGame = 'What is the result of the expression?';
  const taskCalc = () => {
    const num1 = randomNum(30);
    const num2 = randomNum(20);

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
  game(nameGame, taskCalc);
};
export default calc;
