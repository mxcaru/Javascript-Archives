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
