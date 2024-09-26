import game from "../src/index.js";
import randomNum from "../src/getRandomInt.js";
const gcd = () => {
  const nameGame =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskGcd = () => {
    const num1 = randomNum(30);
    const num2 = randomNum(50);

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
