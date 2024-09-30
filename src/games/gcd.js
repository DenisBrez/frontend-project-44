// eslint-disable-next-line max-len
// eslint-disable-next-line import/extensions, import/no-named-as-default, import/no-named-as-default-member
import game from "../index.js";
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default-member, import/extensions, import/no-named-as-default
import getRandomNumber from "../getRandomMinMax.js";

const gcd = () => {
  const nameGame = "Find the greatest common divisor of given numbers.";
  const taskGcd = () => {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 50);

    // функция нахождения минимального числа.
    const Arr = [num1, num2];
    const minNum = Math.min(...Arr);
    const maxNum = Math.max(...Arr);

    const question = `${num1} ${num2}`;
    // eslint-disable-next-line consistent-return
    const gameGcd = () => {
      for (let j = minNum; j > 0; j -= 1) {
        if (minNum % j === 0 && maxNum % j === 0) {
          return j;
        }
      }
    };
    return [question, String(gameGcd())];
  };
  game(nameGame, taskGcd);
};
export default gcd;
