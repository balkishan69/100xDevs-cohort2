/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = ['a','e','i','o','u'];
    let count = 0;
  
    //console.log(str.toLowerCase())
    //console.log(str.toLowerCase().split(""))
  
    str.toLowerCase().split("").forEach((i) => { //forEach can only iterate accross an array so using to convert string str into an array
      if(vowels.includes(i)){
        count++;
      }
    })
    return count;
}

module.exports = countVowels;