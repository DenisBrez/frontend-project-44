import launchGame from '../index.js';

import randomNum from '../getRandomInt.js';

const getArithmeticProgression = (num1, step, prLength) => {
  const progressions = [];
  // функция поиска арифметической прогресии
  for (let i = 0; i < prLength; i += 1) {
    progressions.push(num1 + step * i);
  }

  return progressions;
};

const launchProgression = () => {
  const nameGame = 'What number is missing in the progression?';

  const taskProgression = () => {
    // длина прогрессии
    const prLength = 10;
    const limitRandomNum = 20;
    const limitStep = 5;
    // функция нахождения случайного числа
    const num1 = randomNum(limitRandomNum);
    const step = randomNum(limitStep);

    const hiddenNumberIndex = randomNum(prLength);
    const progressions = getArithmeticProgression(num1, step, prLength);

    const correctAnswer = String(progressions[hiddenNumberIndex]);
    progressions[hiddenNumberIndex] = '..';
    const question = progressions.join(' ');

    return [question, correctAnswer];
  };
  launchGame(nameGame, taskProgression);
};
export default launchProgression;
