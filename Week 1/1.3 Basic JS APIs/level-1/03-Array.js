// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.



// *** push() - inserts the element at last

const initialArray1 = [1,2,3];
initialArray1.push(2);
console.log(initialArray1)
initialArray1.pop();  // removes the last element
console.log(initialArray1)


function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);



// *** pop() - removes the last element
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);



// *** shift() - pops the element from the front
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);



// *** unshift() - inserts the element in the front
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);



// *** concat() - joins two array
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);


// *** forEach() - expects a function as an argument (callback concept)
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);


const initialArray=[1,2,3];
function logThing(str){
  console.log(str + " is the string");
}
initialArray.forEach(logThing)   //logThing function will be called for each element of the initialArray, this is similar to logThing(1), logThing(2), logThing(3)
// calling function logThing for each one of those elements in the array [1,2,3]


// example of callback
function log1(){
  console.log("hello world 1")
}
function log2(){
  console.log("hello world 2")
}
function logWhatsPresent(fn){  // expects a function as an argument
  fn();
}
logWhatsPresent(log2);



// *** map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);



// *** filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);



// *** find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);



// *** sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
