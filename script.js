// JAVASCRIPT BASICS

// ***********************************************************
// 1. IS NUMBER AN EVEN ?
// ***********************************************************

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

//My Code
function myEvenFunction(num) {
  let isEven = num % 2 === 0 ? true : false;
  return isEven;
}

//author's code
// function myEvenFunction(input) {
//   return input % 2 === 0
// }

// Test Cases:
// console.log(myEvenFunction(10)); //Expected true
// console.log(myEvenFunction(-4)); //Expected true
// console.log(myEvenFunction(5)); //Expected false
// console.log(myEvenFunction(-111)); // Expected false

// ***********************************************************
// 2. CONDITIONAL EITHER DIVIDE OR MULTIPLY
// ***********************************************************

// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function multiplyOrDivide(a, b) {
  return a < b ? a / b : a * b;
}

// Test Cases:
// console.log(multiplyOrDivide(10, 100)); // Expected 0.1
// console.log(multiplyOrDivide(90, 45)); // Expected 4050
// console.log(multiplyOrDivide(8, 20)); //Expected  0.4
// console.log(multiplyOrDivide(2, 0.5)); //Expected 1

// ***********************************************************
//3. Comparison operators, strict equality
// ***********************************************************

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function isStrictlyEqally(a, b) {
  return a === b ? true : false;
}

// Test Cases:
// console.log(isStrictlyEqally(2, 3)) //Expected false
// console.log(isStrictlyEqally(3, 3))  //Expected  true
// console.log(isStrictlyEqally(1, '1')) //Expected false
// console.log(isStrictlyEqally('10', '10'))  //Expected true

// ***********************************************************
// 4.Check if a number is a whole number
// ***********************************************************

// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false
function isWholeNumber(num) {
  return num - Math.floor(num) === 0;
}

// Test Cases:
// console.log(isWholeNumber(4)); //Expected true
// console.log(isWholeNumber(1.123)); //Expected false
// console.log(isWholeNumber(1048)); //Expected true
// console.log(isWholeNumber(10.48)); //Expected false

// ***********************************************************
//5. Check whether a string contains another string and concatenate
// ***********************************************************

// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

//My Code
function containsString(a, b) {
  return a.includes(b) ? b + a : a + b;
}

// author's code
// function containsString(a, b) {
//   return a.indexOf(b) === -1 ? a + b : b + a;
// }

// Test Cases:
// console.log(containsString('cheese', 'cake')); //Expected "cheesecake"
// console.log(containsString('lips', 's')); //Expected  "slips"
// console.log(containsString('Java', 'script')); //Expected "Javascript"
// console.log(containsString(' think, therefore I am', 'I')); //Expected "I think, therefore I am"

// ***********************************************************
// 6. Find next higher natural number that is divisble by y
// ***********************************************************

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

//My Code
function nextDivisibleNumber(x, y) {
  while (x % y !== 0) {
    x = x + 1;
  }
  return x;
}

//Author's code
// function nextDivisibleNumber(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }

// Test Cases:
// console.log(nextDivisibleNumber(1, 23)); // Expected 23
// console.log(nextDivisibleNumber(23, 23)); //Expected  23
// console.log(nextDivisibleNumber(7, 3)); // Expected   9
// console.log(nextDivisibleNumber(-5, 7)); //  Expected  0

// ***********************************************************
// 7. Find the correct word by incrementing letters in alphabet
// ***********************************************************

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

//My Code
// function charCodeNext(str) {
//   let newStr = str.split('');
//   let result = newStr.map(item => String.fromCharCode(item.charCodeAt() + 1));
//   return result.join('');
// }

//Author's Code
function charCodeNext(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join('');
}

// Test Cases:
console.log(charCodeNext('bnchmf')); //Expected  'coding'
console.log(charCodeNext('bgddrd')); //Expected  'cheese'
console.log(charCodeNext('sdrshmf')); //xpected 'testing'

// ***********************************************************
//8.Clear up the chaos behind these strings
// ***********************************************************

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

//My own code
// function myChaosFunction(str1, str2) {
//   str1 = str1.replace('%', '');
//   str2 = str2.replace('%', '');
//   let strings = str2.split('');
//   let strings2 = [];
//   for (let i = strings.length - 1; i >= 0; i--) {
//     strings2.push(strings[i]);
//   }

//   return str1.charAt(0).toUpperCase() + str1.slice(1) + strings2.join('');
// }

//Author's code
function myChaosFunction(str1, str2) {
  const first = str1
    .split('')
    .map((item) => item.replace('%', ''))
    .join('');
  const second = str2
    .split('')
    .reverse()
    .map((item) => item.replace('%', ''))
    .join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

// console.log(myChaosFunction('java', 'tpi%rcs'));
// console.log(myChaosFunction('c%ountry', 'edis'));
// console.log(myChaosFunction('down', 'nw%ot'));

// ***********************************************************
//9.Split a number into its digits
// ***********************************************************

// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function mySplitFunction(num) {
  let str = num.toString(); //alternatively const str = num + '';
  let arr = str.split('');
  let newArr = arr.map((item) => Number(item));
  return newArr;
}

// console.log(mySplitFunction(10));  // Expected [1,0]

// console.log(mySplitFunction(931)); //Expected  [9,3,1]

// console.log(mySplitFunction(193278));  // Expected [1,9,3,2,7,8]

// ***********************************************************
// 10. Return the percentage of a number
// ***********************************************************

// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

//My code
// function myPercentFunction(obj) {
// return obj.number * obj.percentage / 100;
// }

//Author's code
function myPercentFunction({ number, percentage }) {
  const percent = (number * percentage) / 100;
  return percent;
}

// console.log(myPercentFunction({ number: 100, percentage: 50 }));
// // Expected 50
// console.log(myPercentFunction({ number: 777, percentage: 2 }));
// //Expected 15.54
// console.log(myPercentFunction({ number: 500, percentage: 99 }));

// ***********************************************************
// 11. How many times does a character occur?
// ***********************************************************

// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

//My Code
function charCountFunction(a, b) {
  const str = b.split('');
  return str.filter((item) => item.toLowerCase() === a).length;
}

//Author's Code
// function charCountFunction(char, string) {
//   return string.toLowerCase().split(char).length - 1
// }

//Test Cases:
// console.log(
//   charCountFunction(
//     'm',
//     'How many times does the character occur in this sentence?'
//   )
// );
//Expected 2
// console.log(
//   charCountFunction(
//     'h',
//     'How many times does the character occur in this sentence?'
//   )
// );
//Expected 4
// console.log(
//   charCountFunction(
//     '?',
//     'How many times does the character occur in this sentence?'
//   )
// );
//Expected 1
// console.log(
//   charCountFunction(
//     'z',
//     'How many times does the character occur in this sentence?'
//   )
// );
//Expected 0

// ***********************************************************
// 12. Return the next higher prime number
// ***********************************************************

// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

//My Code
function myPrimeFunction(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      num = num + 1;
      i = 2;
      myPrimeFunction(num);
    }
  }
  return num;
}

//Author's code
// function myPrimeFunction( input ) {
//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return num > 1;
//   }
//  let n = input;
//  while (!isPrime(n)) n++;
// return n
// }

//Test Cases:
// console.log(myPrimeFunction(38));
//Expected 41
// console.log(myPrimeFunction(7));
//Expected 7
// console.log(myPrimeFunction(115));
//Expected 127
// console.log(myPrimeFunction(2000));
//Expected 2003

// ***********************************************************
//13. Round a number to 2 decimal places
// ***********************************************************

// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(num) {
  return Number(num.toFixed(2));
  //toFixed() returns a string,
  //so Number is required to convert into number
}

// console.log(myFunction(2.12397));   //Expected  2.12
// console.log(myFunction(3.136));  //Expected  3.14
// console.log(myFunction(1.12397));  //Expected  1.12
// console.log(myFunction(26.1379));  //Expected  26.14

//14. Convert a string into CamelCase
function camelizeString(str) {
  let arr = str.split(' ');

  let camelCase = '';
  arr.forEach((item, index) => {
    if (isNaN(item.slice(0, 1)) && !containsSpecialChars(item.slice(0, 1))) {
      if (index === 0) camelCase += item.toLowerCase();
      if (index > 0) {
        camelCase += item.slice(0, 1).toUpperCase();
        camelCase += item.slice(1).toLowerCase();
      }
    } else {
      camelCase = 'Not valid string';
      arr.length = index;
    }
  });

  return camelCase;
}

//testing if a string contains a special character
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

console.log(camelizeString('My Name')); //myName
console.log(camelizeString('Camel Case String')); //camelCaseString
console.log(camelizeString('1234 lskdjfa')); //Not valid string
console.log(camelizeString('lskdj 123as')); //Not valid string
console.log(camelizeString('laxmi #$%^&@')); //Not valid string
console.log(camelizeString('John &Torres')); //Not valid string

//NESTED TERNARY operators
// *****************************************

// function to test whether a number is odd
function isOddNumber(num) {
  if (num % 2 === 1) return 'yes';
  else return 'no';
}

//Refactor a function isOddNumber(num) using ternary operators
function isOddNum(num) {
  return num % 2 === 1 ? 'yes' : 'no';
}

console.log(isOddNum(17)); //yes
console.log(isOddNum(84)); //no

// a function with conditional statements
function numToWord(num) {
  if (num === 1) return 'First';
  else if (num === 2) return (word = 'Second');
  else if (num === 3) return (word = 'Third');
  else return (word = 'No Ranking');
}

console.log(numToWord(1)); //First
console.log(numToWord(5)); //No Ranking

// Rewriting numToWord(num) function using switch Cases

function switchToWord(num) {
  let word;
  switch (num) {
    case 1:
      word = 'First';
      break;
    case 2:
      word = 'Second';
      break;
    case 3:
      word = 'Third';
      break;
    default:
      word = 'No Ranking';
      break;
  }

  return word;
}

console.log(switchToWord(2)); //Second
console.log(switchToWord(31)); //No Ranking

// Rewriting switchToWord(num) function using ternary operators

function numTernaryWord(num) {
  let word =
    num === 1
      ? 'First'
      : num === 2
      ? 'Second'
      : num === 3
      ? 'Third'
      : 'No Ranking';

  return word;
}

console.log(numTernaryWord(3)); //Third
console.log(numTernaryWord(53)); //No Ranking
