import game from "../src/index.js";
import randomNum from "../src/getRandomInt.js";
const calc = () => {
  const nameGame = "What is the result of the expression?";
  const taskCalc = () => {
    const num1 = randomNum(30);
    const num2 = randomNum(20);

    const signs = ["+", "-", "*"];
    const sign = signs[randomNum(3)];

    const question = `${num1} ${sign} ${num2}`;

    let result = 0;
    switch (sign) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    return [question, result.toString()];
  };
  game(nameGame, taskCalc);
};
export default calc;
