import game from '../index.js';

import randomNum from '../getRandomInt.js';

const progression = () => {
  const nameGame = 'What number is missing in the progression?';

  const getArithmeticProgression = (num1, step, prLength) => {
    const progressions = [];

    for (let i = 0; i < prLength; i += 1) {
      progressions.push(num1 + step * i);
    }

    return progressions;
  };

  const taskProgression = () => {
    const prLength = 10;
    const num1 = randomNum(20);
    const step = randomNum(5);
    const hiddenNumberIndex = randomNum(prLength);
    const progressions = getArithmeticProgression(num1, step, prLength);

    const correctAnswer = String(progressions[hiddenNumberIndex]);
    progressions[hiddenNumberIndex] = '..';
    const question = progressions.join(' ');

    return [question, correctAnswer];
  };
  game(nameGame, taskProgression);
};
export default progression;
