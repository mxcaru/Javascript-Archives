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

//NOTE: Using map method
function maps(arr) {
  return (finalArr = arr.map((elem) => elem + 1));
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

//NOTE: Bubble Sort Algorithm, sort array to ascending order
//sample output: [10,4,3,2,1] -> [1,2,3,4,10]
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

//NOTE: Convert 2d array to 1d
//sample output: [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6]
function oneDimensionalConverter(array) {
  let oneDimensionalArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      oneDimensionalArr.push(array[i][j]);
    }
  }
  return oneDimensionalArr;
}

//NOTE: Binary Search Algorithm
//sample out: ([1,2,3,4,5],4) -> value found at index 3
function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.round((left + right) / 2);
    console.log(mid);
    if (sortedArray[mid] === value) {
      return `value found at index ${mid}`;
    } else if (sortedArray[mid] < value) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return `no value found`;
}

//NOTE: Return the Missing Element
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

//Loop solution
function getMissingElement(superImportantArray) {
  let sum = 0;
  for (let i = 0; i < superImportantArray.length; i++) {
    sum -= superImportantArray[i];
  }
  return 45 - -sum;
}

//reduce method
const getMissingElement = (superImportantArray) =>
  superImportantArray.reduce((sum, elem) => sum - elem, 45);

//NOTE: Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//sample output: 'abracadabra' -> 5
function getCount(str) {
  let regex = /[aeiou]/g;
  return str.match(regex) == null ? 0 : str.match(regex).length;
}
