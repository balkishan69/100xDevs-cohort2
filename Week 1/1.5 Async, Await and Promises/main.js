// *** Synchronous function
function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
console.log(findSum(1000));


// *** Asynchronous function (setTimeout)
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
}
function findSumTill100() {
    console.log(findSum(100));
}
setTimeout(findSumTill100, 1000)   // 1000 is in milliseconds,i.e., 1 second. setTimeout() function will wait till all the tasks are done to get executed
console.log("hello world");  // first of all this will print then after 1 sec, sum will get printed


// though we can make the above code synchronous by a dumbest way, (busy waiting)
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
}
function findSumTill100() {
    console.log(findSum(100));
}
// busy waiting
function syncSleep(){
    let a=1;
    for(let i=0;i<100000000;i++){
        a++;
    }
}
syncSleep();   //synchronously sleeping the thread due to expensive operation(syncSleep function)
findSumTill100(); 
console.log("hello world")



// *** Another Asynchronous function -> fs.readFile()
const fs = require("fs");    //filesystem module -> it's a nodejs library for reading and writing to the file

fs.readFile("a.text", "utf-8", function(err,data){
    console.log(data);
})

console.log("hi there");  // this will run  first then the file data, because fs.readFile() is an async function

let c = 0;
for(let i=0;i<100000000;i++){     //takes very long, longer than the file read, file read will resolve before when the sort of thread is busy here, but it will first complete this and then go to the callback fileRead
    c++;
}

console.log("hi there 2");

// NOTE: In javascript, if your thread is busy somewhere even if a callback has resolved, your thread will remain busy, until your thread becomes idle/free, then the control will finally reach in the pending callbacks



// *** Run the below code on the site "latentflip.com/loupe" to understand the async function visually

console.log("Hi there!");

setTimeout(function timeout() {
      console.log("from inside async fn");
}, 20000);
  
setTimeout(function timeout() {
      console.log("from inside async fn");
}, 10000);
  
let b = 0;
for(let i=0;i<10;i++){
      b+=1;
}
  
console.log(b);

// NOTE: callbacks mainly make sense in async functions(real usecase of callbacks). In sync function, it will suffice without actually giving callback functions 



// *** CREATING MY OWN ASYNC FUNCTION: (it's an ugly way that uses callbacks without promises)
// PROMISES are syntactical sugar that makes the code slightly more readable (under the hood it will still use callback, it'll still use callstack, it will still use event loop)

const fs = require('fs');

//my own asynchronous function (under the hood, it still uses some other async function that js provides u out of the box)
function kishanReadFile(cb){        // it's just a wrapper on top of other async function, which is fine. Usually all async function which u will write will be on top of Js provided async functions like setTimeout or fs.readFile
  fs.readFile("a.txt", "utf-8", function(err,data){
    cb(data);
  });
}

//callback function to call
function onDone(data){
  console.log(data)
}

kishanReadFile(onDone)



// *** Using PROMISE:  What's a better way of creating async fn, is by using PROMISES -> its just syntactic sugar still uses callbacks under the hood

const fs = require('fs');

// my own asynchronous function
function kishanReadFile(){      // notice the function doesn't have any callback function as argument when using promise(the reason to introduce a promise is to get rid of callbacks because callbacks are an ugly way to write asynchronous code because they do something like callback hell)
  return new Promise(function(resolve){   //returns new promise, basically creates an instance of the promise class(similar to new date), it is object of the promise class. And, the first argument to new promise is going to be a function which takes "resolve" as an argument
    fs.readFile("a.txt", "utf-8", function(err,data){
      resolve(data);  // After reading the file, call resolve on data and the promise we are returning above will get stored in kishanReadFile() at last line of code
    });
  })
}

//callback function to call
function onDone(data){
  console.log(data)
}

kishanReadFile().then(onDone);  //we can also write this as: var a = kishanReadFile();    // if u do: console.log(a);  it will log: Promise { <pending> }  , it synchronously returns promise, it doesn't return the file data immediately
                                                          // a.then(onDone);



// *** Once more explanation of promise

const fs = require('fs');
// my own asynchronous function
function kishanReadFile(){
  console.log("inside kishanReadFile")
  return new Promise(function(resolve){
    console.log("inside promise")
    fs.readFile("a.txt", "utf-8", function(err,data){
      console.log("before resolve")
      resolve(data);
    });
  })
}

//callback function to call
function onDone(data){
  console.log(data)
}

// kishanReadFile().then(onDone);  -> This one line is same as next 3 lines below
var a = kishanReadFile();
console.log(a);
a.then(onDone);



// *** Promises

// var d = new Date();   -> this is just a class similar to date, initialisation of object of class
// console.log(d.getDate());
// Similarly,

var d = new Promise(function(resolve){   //whevever u are initializing a new promise, u have to give it the first argument as a function and the function also needs to have the first argument as "resolve" (we can name it anything else as well)
                                         // we can define a promise even outside a function, u don't necessarily have to define a function and only inside u can return a promise, no, it's just a class u can define the object of the class anywhere
  setTimeout(function(){
    resolve("foo");
  },1000)
  
});

function callback(){
  console.log(d);   // here promise state is resolved
}

console.log(d);  // here promise state is pending
d.then(callback)

// promise can have 3 states => pending, resolved, rejected

// Promise is just a class that makes callbacks and async functions slightly more readable, when u create it, u need to pass in a function as the first argument which has resolve as the first argument



// ***  Await Async syntax

// Normal syntax
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here, then only it makes sense to use promise
    resolve("hi there!");  //immediately resolving, which is making it a synchronous function
  });
  return p;
}
function main() {
  kiratsAsyncFunction().then(function(value) {
      console.log(value);
  });
}
main();

// Async await syntax
function kiratsAsyncFunction(){
  let p = new Promise(function(resolve){
    //do some logic here
    setTimeout(function(){
      resolve("hi there!")
    }, 3000)
  });
  return p;
}
async function main(){    // make the function asynchronous by using the keyword async before function
  //no callbacks, no .then syntax
  let value = await kiratsAsyncFunction()   // thread didn't stop here, it's just awaiting here, somewhere put in the web API section of js architecture. While it's awaiting the stack continues
                                            // this await keyword is very important, if u don't write it what u get back is the promise itself, if u write await is when u get back the resolved value
  console.log("hi there1");  // After 3 seconds, this will get printed because thread seems like stuck
  console.log(value);
}
/*
But if we do this -> 

async function main(){
  kiratsAsyncFunction().then(function(value){     // this is equivalent to  writing: let value = await...(see above)
    console.log(value);
  })
  console.log("hi there1");  // now hi there1 will come immediately then after 3 seconds hi there! will print
}
*/
main();
console.log("after main");



// Async await syntax -> usually used on the caller side, not on the side where u define an async function
// await needs to be write inside an async function that's why i had to write async function main() here and then call main()
//  SEE THE NOTES OF NOTEBOOK AS WELL AS BY HARKIRAT


