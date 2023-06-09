//  Part One
//      1. O(n+10) -> O(n) :arithmetic equations are constant
//      2. O(100 * n) -> O(n) : arithmetic equations are constant
//      3. O(25) -> O(1) : numbers are constants, 1 represents the best possible time complexity one can achieve
//      4. O(n^2 + n^3) -> O(n^3) : take the largest difference maker
//      5. O(n + n + n) -> O(n) : arithmetic equations are constant
//      6. O(1000 * log(n) + n) -> O(n): 1000 is a constant, as are the arithmetic operations
//      7. O(1000 * n * log(n) + n) -> O(n log(n) n): remove contants, n still seperated by log(n)
//      8. O(2^n + n^2) -> O(2^n) : arithmetic equation is constant, 2^n power will return larger than n^2
//      9. O(5 + 3 + 1) -> O(1) : numbers are constants, 1 represents the best possible time complexity one can achieve
//      10. O(n + n^(1/2) + n^2 + n * log(n)^10 -> O(n^2): the n^2 is the highest order term

//  Part Two: Calculate Time Complexity

//  1.
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
// Time Complexity: O(n)

//  2.
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
// Time Complexity: O(n)

//  3.
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
// Time Complexity: O(1)

//  4.
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
// Time Complexity: O(n)

//  5.
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
// Time Complexity: O(n^2) : Outer loop iterates n times and the inner loop iterates [i] times representing the index of the outer loop 

//  6.
function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
// Time Complexity: O(n) // operator is on a fixed length for the string // key max is 10

// Part Three - Short Answer

//  1. True or false: n^2 + n is O(n^2).
//      True

//  2. True or false: n^2 * n is O(n^3).
//      True
//  3. True or false: n^2 + n is O(n).
//      False : it was literally true above haha

//  4. What’s the time complexity of the .indexOf array method?
//      O(n)

//  5. What’s the time complexity of the .includes array method?
//      O(n)

//  6. What’s the time complexity of the .forEach array method?
//      O(n) : callback dependent at times

//  7. What’s the time complexity of the .forEach array method?
//      O(n log n) : These algorithms divide the array into smaller subarrays, sort them recursively, and then merge or combine the sorted subarrays back together. This process involves repeatedly dividing the array into halves, which gives the log n factor in the time complexity.

//  8. What’s the time complexity of the .unshift array method?
//      O(n)

//  9. What’s the time complexity of the .push array method?
//      O(1)

//  10. What’s the time complexity of the .splice array method?
//      O(n) : Can potentiually end up as O(1) but cannot assume that that early

//  11. What’s the time complexity of the .pop array method?
//      O(n)

//  12. What’s the time complexity of the Object.keys() function?
//      O(n)

// *BONUS* 
//  13. What’s the space complexity of the Object.keys() function?
//      THE MOMENT YOUVE ALL BEEN WAITING FOR...
//      THE ANSWER TO THE INSANE BONUS QUESTION...
//      IS NONE OTHER THAN...
//      THE ONE...
//      THE ONLY...



//      O(n)