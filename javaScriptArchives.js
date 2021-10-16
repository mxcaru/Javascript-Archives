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
  const firstElem = myString[i];
  const secondElem = myString[length - i - 1];
  for (i = 0; i < length - 1; i++) {
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
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (curr + 1 !== next) {
      return next;
    }
  }
  return null;
}
