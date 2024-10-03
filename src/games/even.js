import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';
// функия ахождения четного числа
const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const launchEven = () => {
  const nameGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const maxNum = randomNum(80);

    const question = `${maxNum}`;

    const answer = checkEven(maxNum);
    return [question, answer];
  };
  launchGame(nameGame, taskEven);
};
export default launchEven;
