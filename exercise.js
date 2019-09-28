//3. Первая программа
console.log('Hello, World!');

//5. Математика и константы

const weigh = 64;
const c = 300000000;
const energy = weigh * (c ** 2);

//6. Функции и ящики

const squareOfSum = (x, y) => {
  return x * x + 2 * x * y + y * y;
}

//7. Условия и принятия решений

const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100
   }
  else if (exam > 75 && projects >= 5){
    return 90
   }
  else if (exam > 50 && projects >= 2){
    return 75
   }
  else{
    return 0
   }
}

//8. О, нет, ошибки! И как с ними справляться

return nothing;

const value = 3;
  value();

//9. Рекурсия

 if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);

//10. Итеративный процесс

 if (num % 2 === 0) {
    return 2;
  }
  if (num % 3 === 0) {
    return 3;
  }
  if (num % 5 === 0) {
    return 5;
  }
  if (num % 7 === 0) {
    return 7;
  }
  if (num % 11 === 0){
    return 11;
  }
  return num;

//11. Переменные, декларативное и императивное программирование

function smallestDivisor (n){
  if (n > 0){
      if (n % 2 === 0){
        return 2;
      }
      else if (n % 3 === 0){
        return 3;
      }
      else if (n % 5 === 0){
        return 5;
      }
      else if (n % 7 === 0){
        return 7;
      }
      else if (n % 11 === 0){
        return 11;
      }
      else{
        return n; 
      }
  }
  else{
    return NaN;
  }
}
//12. Строки и работа с символами

const reverse = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    result = str[i] + result;
    i = i + 1;
  }
  return result;
}

//13. Цикл for и изменение переменных

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};


//14. Тесты и автоматическая проверка кода

assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(4), 24);

//15. Модули

export const getTriangleArea = (h, b) => 1/2 * h * b;

import {getTriangleArea} from './myMathModule'
const area = (n) => getTriangleArea(n, (square(n)/2));
export default area;

//16. Выражения и инструкции

const square = (n) => n * n;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));

//17. Окружение

let big = 0;
  for (let i = 0; i < length(str); i = i + 1) {
    if (toUpperCase(str)[i] === str[i]) {
      big = big + 1;
      }
  }
  return big;

//18. Типизация

const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};

export default addDigits;

//19. Чистые функции

const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0 )) {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};
export default solution;