"use strict";

//NOTE: will return true if the str is a palindrome, return false if not
//sample output: racecar -> true
function palindromeChecker(str) {
  let arr = str.split("");
  let index = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[index++] != arr[i]) {
      return false;
    }
  }
  return true;
}

//NOTE: solution 2 : will return true if the str is a palindrome, return false if not
//sample output: racecar -> true
function palindromeChecker(myString) {
  const length = myString.length;
  let i = 0;
  let firstElem = [];
  let secondElem = [];
  for (i = 0; i < length - 1; i++) {
    firstElem = myString[i];
    secondElem = myString[length - i - 1];
    if (firstElem != secondElem) return false;
  }
  return true;
}

//NOTE: will build a palindrome based on a given string
//sample output: abcdc -> abcdcba
function buildPalindrome(str) {
  if (palindromeChecker(str)) {
    return str;
  }
  let newArr = str.split("");

  for (i = 1; i < newArr.length; i++) {
    newArr.push(newArr.slice(0, i).reverse().join(""));
    if (palindromeChecker(newArr.join(""))) {
      return newArr.join("");
    }
    newArr = str.split("");
  }
}

//NOTE: Find the first non-consecutive number
//sample output: [1,2,3,5] -> 5
function firstNonConsecutive(arr) {
  let curr = 0;
  let next = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    curr = arr[i];
    next = arr[i + 1];
    if (curr + 1 !== next) {
      return next;
    }
  }
  return null;
}

//NOTE: Reverse a string
//sample output: hello -> olleh
function reverseString(str) {
  let final = "";
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}

//NOTE: Reverse a string using map method
function maps(arr) {
  return (finalArr = arr.map((elem) => elem * 2));
}

//NOTE: Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

//NOTE: Find the stray number
//sample output: [17,17,17,3] -> 3
function stray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum ^= numbers[i];
  }
  return sum;
  //   let reducer = (first, second) => first ^ second;
  //   return numbers.reduce(reducer);
}

//loop version of reduce
let accumulator = 0;
for (let currentValue = 0; currentValue < numbers.length; currentValue++) {
  accumulator ^= numbers[currentValue];
}

//how to use reduce method
//arrow function version
const stray = (numbers) =>
  numbers.reduce((accumulator, currentValue) => accumulator ^ currentValue);
