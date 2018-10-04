/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
/*
input: number
output: is a product of the input number
steps:
1. create a base case that says if n is less than 0 return -1  
2. Also if n === 0 then return 0;
3. to create this recursive function call we will need to multiply n times factorial(n) but we want the numbers to decrement.
   SO we need to multiply n * factorial(n - 1). This will ensure that we are calculating the factorial.
*/
var factorial = function(n) {
  if (n < 0 || n === undefined) {
    return null;
  }  
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*
input: is an array 
output: is a number
steps:
1. create a base case if array.length < 0 or an empty array return 0 
2. using array.slice(1) recursively call the elements with the array.
*/
var sum = function(array) {
  if (!array.length) {
     return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
/*
input: is an array 
output: is a number
steps:
1. create a base case if array.length < 0 or an empty array return 0 
2. using reduce return the collected sum of the array
3. within reduce check if the array element is an array. 
4. if it is an array acc += el
*/
var arraySum = function(array) {

  return array.reduce((accum, element) => {
      return accum + (Array.isArray(element) ? arraySum(element) : element); 
  }, 0); 
};

// 4. Check if a number is even.
/*
input: is an number 
output: is a boolean
constraints: cannot use modulo
steps:
1. set the base case that if n strictly equals 0 then return true
2. set another case if n is 1 or -1 return false
3. if n greater than 0 recursively call isEven(n - 2 ) otherwise decrement if n is negative.



var isEven = true;
for(let i = 1; i <= n; i++){
  isEven = !isEven
}
return isEven;
*/
var isEven = function(n) {
  if (n === 0) { 
    return true;
  }
   if (n === 1 || n === -1) {
    return false;
   }
 return isEven(n > 0 ? n - 2 : n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*
input: is an number
output: is a number
steps:
1. create a base case if n equals zero return zero.  
2. using recursion add n + sumBelow(n - 1) if number is greater 0.
*/
var sumBelow = function(n) {
   if (n === 0) {
      return 0;
   }
   // if (n > 0) {
   //   return (n -1 + (sumBelow(n - 1));
   // }  else {
   //   return (n + 1) + sumBelow(n + 1);
   // }
   n = n > 0 ? n - 1 : n +1;
   return n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/*
input: two numbers x equals first number in range and y equals the last number
output: return an array in-between the two input numbers
steps:
1.  create base case of if x equals y then return an empty array
2.  if x is greater than y then recursively call y, x and then reverse it.
3.  create an array in which to store the range elements
4. 
*/
var range = function(x, y) { // 2, 8
  // if (x > y) {
  //   return range(y, x).reverse();
  // }
  if (y - x === 1 ||  y - x === 0) {
    return [];
  }
  y = y > x ? y - 1 : y + 1;
  if (x === y) {
    return [];
  } else {
    return range(x,y).concat(y);//[3,4,5,6,7]
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*
input: base number and an exponent
output: is a product of the two input numbers
steps:
1.  create base case saying if exp === zero then return 1 otherwise if exp === 1 then return base
2.  if number is positive and even 
3.  if number is positibe and odd
4.  if number is negative
*/
var exponent = function(base, exp) { //2, 3
  if (exp === 0) {
    return 1;
  }
  return exp > 0 ? base * exponent(base, exp - 1) : exponent(base, exp + 1) / base;
  // if(exp === 1 ){
  //  return base;
  // }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
input: number
output: boolean if number is a power of two
steps:
1.  Base Case: if n is equal to 1  return true
2.  Otherwise if n is equal to 0 return false
3.  create return statement that recursively calls powerOfTwo(n / 2)
*/
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }

  if (n === 0 || n % 2 === 1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
/*
input: a string
output: is the reverse of that string
steps:
1.  create base case if string equals an empty string return an empty string
2.  using .slice() recursively call the string at index 1
3.  
4. 
*/
var reverse = function(string) {
  if (string === '') {
    return '';
  }
  return reverse(string.slice(1)) + string.charAt(0);// h, e, l, l, o, the return should look like 'olleh'
};

// 10. Write a function that determines if a string is a palindrome.
/*
input: is a string
output: a boolean
steps:
1. create base case if a string is empty return true '' if string.length === 1 return true
2. create a variable to make all characters lowercase
3. if (palindrome(same as reverse)) is true return true otherwise return false
4. 
*/
var palindrome = function(string) {
  if (string.length === 1 || string === '') {
    return true;
  }
  
  if (string[0].toLowerCase() !== string.slice(-1).toLowerCase()) {
      return false;
    }
     
    return palindrome(string.substring(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
input: two numbers the first is the 
output: output should be a number
steps:
1. Base Case: if 
2. while y is not greater than x  y increments  y+y  
3. 
4. 
//negative numbers
(-79 % 82);
(-275 % -502);
(-275 % -274);
(-4 % 2);

//postive numbers

*/
var modulo = function(x, y) {
  if (x === 0 && y === 0) {
      return NaN;
    }
    if (x === 0) {
      return 0;
    }

  if (x < 0 && y < 0) {
    if (x > y) {
      return x;
    }
  } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
      if (-x < y) {
        return x;
      }
      return modulo(x + y, y);
    }else {
      if (x < y) {
        return x;
      }
    }

    if(x > 0 && y > 0) {
      if (y > x) {    
        return x;
      } 
   } 
   return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
/*
input: two numbers 
output: output should be the product of the two numbers
steps:
1. Base Case: if x and y equal zero return 0
2. if x is greater than y create a while loop that states that while y > 0 
3. create an if condition for if both x and y are less than zero
4. create an if block for if x or y is negative and the other integer is positive
*/
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if (y < 0) {
  return - x + multiply(x, y + 1)
  }

  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
/*
input: two numbers 
output: output is a single number
steps:
- 
-
-

*/
var divide = function(x, y) {
  if(y === 0){
    return NaN;
  }
  if (x === 0 || x < y) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if((x < 0 && y < 0) && (y < x)) {
     return 0;
  }
  if (x < 0 && y > 0) {
    return divide(x + y, y)
  }
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  }  
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = function(x, y) {
  if(x < 0 || y < 0) {
    return null;
  }

  if (y % x === 0) {
    return x;
  }

  if (x > y) {
    return gcd(y, x);
  } else {
    return gcd(x, y % x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/*
input: two strings
output: a boolean
steps:
- check if both strings lengths are zero. If so then return true
- check if either string is longer than the other if so return false
- using iteration compare the two strings to one another.
- 

*/
var compareStr = function(str1, str2) {
 //return str1 === '' && str2 === '' ? true : str1.charAt(0) === str2.charAt(0) ? compareStr(str1.slice(1), str2.slice(1)) : false;
  if (str1 === '' &&  str2 === '') {
    return true;
  }
  if (str1.charAt(0) === str2.charAt(0)){
    return compareStr(str1.substr(1),str2.substr(1));
  } else {
    return false;
  }
  return compareStr(str1, str2);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
input: two strings
output: an array of characters
steps:
- create the base case stating that if the string is empty return an empty array
- 
- 
- 

*/
var createArray = function(str) {
 if (str.length === 1) {
   return [str[0]];
 }
 return [str[0]].concat(createArray(str.slice(1)))
};

// 17. Reverse the order of an array
/*
input: is an array
output: is a array that is reversed
Steps:
- create a base case stating if the array length is less than 1 return an empty array
- write a return case that recursively calls the array by using the .pop() to take the last element out of the array and place it in the call stack.
- return 

*/
var reverseArr = function(array) {
  if (array.length < 1){
    return [];
  }
  return [array.pop()].concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/*
input:
output:
steps:
- create a base case stating that when the array length is zero return an empty array
- create a return case that recursively calls the the buildList function while the array length is less than the length argument.


*/
var buildList = function(value, length) {
  if(length === 0) {
    return [];
  }  
 return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
/*
input: a number
outpout: is an array of numbers and strings
steps:
1. create a base case stating if n is equal to zero then return an empty array
2. create conditionals for mulitples of three, five, and three and five respectively and assign to the appropriate string
3. create an array that concatenates each value of the recursive call and return it.
*/

var fizzBuzz = function(n) {// 5 4 3 2 1
  var result = [];
  var val = n;

  if ( n === 0 ) {
    return result;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    val = 'FizzBuzz';
  }
  if (n % 3 === 0 && n % 5 !== 0) {
    val = 'Fizz';
  }
  if (n % 3 !== 0 && n % 5 === 0) {
    val = 'Buzz';
  } 
    result.push(val.toString());
    return fizzBuzz(n-1).concat(result) 
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
input: an array of elements and a value
output: is a number that pertains to the occurences of the value argument.
steps:
1. create a count variable
2. access each element by iteration; then check and see if the value matches the current element if so count increments
3. if array.length is strictly equal to 0 then return the 
4. return count

*/

var countOccurrence = function(array, value) {
  let count = 0;
  if (value === array[0]) {
     count++;
  }
  if(array.length === 0){
    return 0;
  }
  return count + countOccurrence(array.slice(1), value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/*
input: is an array and a callback
output: is an array of mapped elements
steps:
1. create a base case stating that if the array.length is equal to zero return an empty array
2. using recursion call the array and the callback, but use the callback with the .concat method to produce mapped elements

*/
var rMap = function(array, callback) {
   if (array.length === 0) {
     return [];
   }
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
/*
input: an object and a key in that object
output: is a number representing the amount of times that key is in the nested object.
steps:
1. create a count variable that will be returned if
2. using an if conditional see if the input key is a property in the object if so then count increases by 1.
3. next if the type of key is an object then look inside that object and see if the key of that nested object is the input key.
4. return count.
*/

var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let prop in obj) {
    if (prop === key) {
      count++;
    }
    if (typeof obj[prop] === 'object') { //r === 1
      count += countKeysInObj(obj[prop], key);
    }
  }
  return count;
};
// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
 let count =  0;
  for (let prop in obj){
    if (obj[prop] === value){
      count++;
    }
    if(typeof obj[prop] === 'object'){
      count += countValuesInObj(obj[prop], value)
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/*
input: is an object, old key(string), new key(string)
output: output is the same object with swapped keys
steps:
1. create a base case that looks for the oldKey string within the object by iterating through the object. 
 - if the key is found then that old key = newKey 
2. create an if block that checks the if the value is an object. If it is then recursively call the replaceKeysInObj function
3. Finally return the object


*/
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let prop in obj) {
    let value = obj[prop];

    if (prop === oldKey) {
      console.log(obj[newKey]);
      console.log(value);
      obj[newKey] = value
      console.log(obj[oldKey]);
      delete obj[oldKey];
    }
    if(typeof value === 'object'){
      value = replaceKeysInObj(value, oldKey, newKey)
    }
  } 
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
/*
input: a number
output: is an array of fib numbers starting at zero.
steps:
- create if statement to handle edge case
- create if statement to handle if n is less than 2
- return 


*/
var fibonacci = function(n) {
  let array = [0];
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0,1];
  }
  return array.unshift(fibonacci(n-1) + fibonacci(n-2));
  // if (n === 0 || n < 0) {
  //   return null;
  // }
  // if (n === 1){
  //   return [0, 1]
  // } 
  //   var sumArrays = fibonacci(n-1)[fibonacci(n-1).length - 1] + fibonacci(n-1)[fibonacci(n-1).length - 2]
  //   return fibonacci(n-1).concat(sumArrays);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  };
  if (n === 1){
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
/*
input: an array of strings
output: an array of capitalized strings
steps:
- create an array in which to store the output strings
- create a base case that states if array.length is  < 1 return empty the output array
- using recursion, use the slice() method on the initial input array and then use toUpperCase on that element toUpperCase() method 

*/

var capitalizeWords = function(array) {
  let capitalized = [array[0].toUpperCase()];
  if (array.length === 1){
    return capitalized;
  }
  
  return capitalized.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  let result = []
  if (array.length === 0){
    return result;
  }
  result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  result = result.concat(capitalizeFirst(array.slice(1)))
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
/*
input: is an object
output: the sum of all even values
steps:
1. create an evenSum variable
2. create a base case that states if the value is an even number then add it to the evenSum variable
3. if a value is an object then iterate through that object and recursively call the nestedEvenSum problem
4. return evenSum
*/
var nestedEvenSum = function(obj) {
  let evenSum = 0;
  //base case/ if value is even
  for(let key in obj){
    if(obj[key] % 2 === 0) {
      evenSum += obj[key]; 
    }
    //if the value is an object then 
    if(typeof obj[key] === 'object'){
      evenSum += nestedEvenSum(obj[key])
    }
  }
  return evenSum;
};
// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

//input is an a nested array
//output is a an array of the non nested elements within the array.
var flatten = function(array) {
  var flatArray = [];
    array.forEach((item) => {
      if(Array.isArray(item)){
        flatArray.push(...flatten(item))
      } else {
        flatArray.push(item);
      }
    });
  return flatArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
/*
input: string and object
output: out is an object with letters and numbers as key/value pairs
steps:
- assign obj to an object;
- traverse the string with the slice method using recursion
- if the letter does not exist then obj[str[0]] = 1 otherwise increment the value
- return the recursion call with the slice method.
*/
var letterTally = function(str, obj) {
  let result = Array.from(arguments)[1] || {};
  if (str.length === 0){
    return result;
  }
  if (!result[str[0]]) {
    result[str[0]] = 1
  } else {
    result[str[0]]++
  }
  return letterTally(str.slice(1), result);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length === 0){
    return [];
  }
  if (list[0] !== list[0+1]) {
    return [list[0]].concat(compress(list.slice(1)));
  }
  return [].concat(compress(list.slice(1)));
    // if (list.length===1) {
    //   return list.shift();
    // }
    // if(list[0]===list[1]) {
    //   return compress(list.slice(1));
    // } 
    // return [list.shift()].concat(compress(list));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if(array.length === 1) {
    return [array[0].concat(aug)];
  }
  return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug))
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
/*
input: input is an array of duplicates
output: an array of non-sequential duplicate values
steps:
- Create a base case that returns an empty array
- compare the the two values if the the value that is to the right of the first index is the same value then do nothing
- if it is different then push that value into the result array
- return result
*/
var minimizeZeroes = function(array) {
  // base case
  if (array.length === 0) {
    return [];
  }
  if (array[0] !== array[0 + 1]) {
    return [array[0]].concat(minimizeZeroes(array.slice(1))); 
  }
  return [].concat(minimizeZeroes(array.slice(1)))
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
/*
input: an array of numbers both positive and negative
output: is an array of numbers that are both positive and negative values combined
steps:
- create a base case stating if the array's length is zero return an empty array
- check if the first value is negative, and if it is multiple that value by -1 then concat that to the recusive call 
- check if the second number is negative if it is then return array[0], array[0+1]
- check if the first and second number are positive if so then multiple the second by -1
- return empty array.concat(recursive call)

*/

var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  // both positive
  if (array[0] > 0 && array[1] > 0){
    return [array[0], array[1] * -1].concat(alternateSign(array.slice(2)));
  }
  //both negative
  if (array[0] < 0 && array[1] < 0){
    return [array[0] * -1, array[1]].concat(alternateSign(array.slice(2)));
  }
  // first element negative and second positive
  if(array[0] < 0 && array[1] > 0){
    return [array[0] * -1, array[1] * -1].concat(alternateSign(array.slice(2)));
  }
  // first element is positive second is negative
  if(array[0] > 0 && array[1] < 0){
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  }
  return [].concat(alternateSign(array.slice(2)));
 
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

/*
input: is a string containing words and numbers
output: is a just a string of chars and words
steps:
- create a base case for an empty string
- create an 


*/

var numToText = function(str) {
    var numNameRef = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
    var strArr = str.split(' ');
    if(strArr.length===1) {
      return (!isNaN(Number(strArr[0]))) ? numNameRef[Number(strArr[0])] : strArr[0];
    } 
    var strRet = (strArr.slice(1).join(' '));
    return (!isNaN(Number(strArr[0]))) ? (numNameRef[Number(strArr[0])] + ' ' + numToText(strRet)) : (strArr[0] + ' ' + numToText(strRet));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
