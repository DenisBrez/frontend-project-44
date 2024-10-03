import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';
// функия ахождения четного числа
const isOddEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const launchEven = () => {
  const nameGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const limitRandomNum = 80;
    const maxNum = randomNum(limitRandomNum);

    const answer = isOddEven(maxNum);
    return [`${maxNum}`, answer];
  };
  launchGame(nameGame, taskEven);
};
export default launchEven;
