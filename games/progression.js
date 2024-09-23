import game from "../src/index.js";
import randomNum from "../src/getRandomInt.js";

const Progression = () => {
  const nameGame = "What number is missing in the progression?";

  const getArithmeticProgression = (num1, step, prLength) => {
    const progression = [];

    for (let i = 0; i < prLength; i += 1) {
      progression.push(num1 + step * i);
    }

    return progression;
  };

  const taskProgression = () => {
    const prLength = 10;
    const num1 = randomNum(20);
    const step = randomNum(5);
    const hiddenNumberIndex = randomNum(prLength);
    const progression = getArithmeticProgression(num1, step, prLength);

    const correctAnswer = String(progression[hiddenNumberIndex]);
    progression[hiddenNumberIndex] = "..";
    const question = progression.join(" ");

    return [question, correctAnswer];
  };
  game(nameGame, taskProgression);
};
export default Progression;
