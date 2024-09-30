import game from "../index.js";
import getRandomNumber from "../getRandomMinMax.js";
const gcd = () => {
  const nameGame = "Find the greatest common divisor of given numbers.";
  const taskGcd = () => {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 50);

    //функция нахождения минимального числа.
    let Arr = [num1, num2];
    let minNum = Math.min(...Arr);
    let maxNum = Math.max(...Arr);

    const question = `${num1} ${num2}`;
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
