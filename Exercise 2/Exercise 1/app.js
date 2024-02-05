console.log("Functions - Exercise 1");

//Exercises

//Exercise 1

//1.Function that takes a number through a parameter and returns how many digits that number has
//2.Function that takes a number through a parameter and returns if its even or odd
//3.Function that takes a number through a parameter and returns if its positive or negative
//Finally create a function that takes a number through a parameter and calls all three functions for the number that was passed.
//It should show the results in the console.

function numberOfDigits(number) {
  let numberString = Math.abs(number).toString();
  return numberString.length;
}
//let exampleOne = 10;
//let digitCount = numberOfDigits(exampleOne);
//console.log(`The number ${exampleOne} has ${digitCount} digits.`);

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//let exampleTwo = 10;
//let resultTwo = checkEvenOrOdd(exampleTwo);
//console.log(`This number ${exampleTwo} is ${resultTwo}.`);

function checkPositiveOrNegative(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  }
}

//let exampleThree = -10;
//let resultThree = checkPositiveOrNegative(exampleThree);
//console.log(`The number ${exampleThree} is ${resultThree}.`);

function finallyResult(number) {
  console.log(`Digits: ${numberOfDigits(number)}`);
  console.log(`Even or Odd: ${checkEvenOrOdd(number)}`);
  console.log(`Positive or Negative: ${checkPositiveOrNegative(number)}`);
}

let result = 10;
finallyResult(result);
