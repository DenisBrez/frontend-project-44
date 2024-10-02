// функция нахождения случайного числа с 2 переменными
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export default getRandomNumber;
