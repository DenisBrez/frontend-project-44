import readlineSync from 'readline-sync';

// определение функции случайного числа
const randomNum = (max) => Math.floor(Math.random() * max);

// определение функции игры на четность
// eslint-disable-next-line consistent-return
const gameEven = () => {

   // определеие функции запроса имени
	 const userAdd = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

	 // eslint-disable-next-line no-console
	 console.log(`Hello, ${userAdd}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const maxNum = randomNum(80);
    // eslint-disable-next-line no-console
    console.log('Question:', maxNum);

    const answer = readlineSync.question('Your answer:');

    const examination1 = maxNum % 2 === 0 && answer === 'yes';
    const examination2 = maxNum % 2 !== 0 && answer === 'no';

    if (examination1 === true || examination2 === true) {
      // eslint-disable-next-line no-console
      console.log('Correct!');
    } else {
      const checking = answer === 'yes' ? 'no' : 'yes';
      // eslint-disable-next-line no-console
      const warning = console.log(`"${answer}" is wrong answer ;(. Correct answer was '${checking}'. \nLet's try again, ${userAdd}!`);
      return warning;
    }
  }
  // eslint-disable-next-line no-console
  console.log(`Congratulations, ${userAdd}!`);
};
export default gameEven;
