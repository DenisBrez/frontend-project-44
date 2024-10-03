// функция нахождения простого числа
const searchPrimeNumber = (num1) => {
  if (num1 < 1) return false;

  if (num1 <= 3) return true;

  if (num1 % 2 === 0 || num1 % 3 === 0) return false;

  for (let i = 5; i * i <= num1; i += 6) {
    if (num1 % i === 0 || num1 % (i + 2) === 0) return false;
  }
  return true;
};
export default searchPrimeNumber;
