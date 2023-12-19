const b=5;  //now we can't change the value of b throughout the program
var a=1;  // let also works same instead of var

a=2;
let firstName="balkishan";
let age=20;
let isMarried=false;

console.log("this person name is "+ firstName+" and their age is "+age);


// *** If-Else

if(isMarried==true){
    console.log(firstName+" is married")
}
else{
    console.log(firstName+" is not married");
}

// *** LOOP

let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i;
}
console.log(answer);


// *** ARRAY

let person1="balkishan";
let person2="harkirat";
let person3="Avneesh";

const personArray=["balkishan","harkirat","Avneesh"];

console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

const ages=[21,22,23,24,25];
const numberOfPeople=ages.length;
for(let i=0;i<numberOfPeople;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

// *** OBJECTS -> used for combining values in js

const users=[1,2,3]  // array of integers
const users2=["harkirat", "balkishan"]  // array of strings

// object syntax
const users1={
    firstName: "Balkishan",
    gender: "male"
}
console.log(users1["gender"]);   //users1["gender"] and users1.gender both are same, and it is pass by value. But there is nothing like users1[gender]

//Array of objects (every field of this array is an object in itself)
const allUsers=[{
    firstName: "balkishan",
    gender: "male"
}, {
    firstName: "harkirat",
    gender: "male",
    metadata: {
        age: 21,
        address: ""
    }
}, {
    firstName: "avneesh",
    gender: "female"
}]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}



// *** FUNCTIONS -> take arguments as an input, returns a value as an output
// Note: Functions can tale other functions as input => CALLBACKS

// func. to return the sum of two values
function sum(a,b){
    const sumValue=a+b;
    return sumValue;
}
const value=sum(1,2)
console.log(value);


// *** FUNCTION CALLBACKS (functions can take other functions as input)

function sum(num1, num2){
    let result=num1+num2;
    return result;
}
function displayResult(data){
    console.log("Result of the sum is: "+ data);
}
function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}
const ans3=sum(1,2);
displayResult(ans3);

// but what if u have to display the result using only one function call

function sum(num1, num2){
    let result=num1+num2;
    return displayResult(result);  // here we changed(called the displayResult function)
}
function displayResult(data){
    console.log("Result of the sum is: "+ data);
}
function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}
sum(1,2);

// but what if u have to display the result in either simple way or in passive way with only single function call

function sum(num1, num2, fnToCall){   // took 3rd argument as the which function to call
    let result=num1+num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is: "+ data);
}
function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}
const ans=sum(1,2,displayResult);   // callbacks


// Another example

function calculateArithmetic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const value2=calculateArithmetic(1,2,sum);
console.log(value2);


// "setTimeout" function -> global function that js provides
// it takes 2 parameters, first one is some logic or probably function, and the second argument is no. of seconds(in milliseconds, 1000 milliseconds = 1 second) u need to wait before the first argument runs
// Example:
function greet(){
    console.log("hello world");
}
setTimeout(greet, 1000); //after 1 sec the function greet gets called and prints hello world
//so this is also callback, because we are passing a funcion as an argument to setTimeout funcion
// internal working of setTimeout function:
// function setTimeout(functionToExecute, duration){
//     sleep(duration);
//     functionToExecute();
// }
//similarly there is setInterval() function in which function is gets called after every time interval given as the argument

function greet(){
    console.log("hello friends");
}
setTimeout(greet, 4*1000)  //calls the function greet after 4 seconds 
setInterval(greet, 2*1000)  //calls the function greet after every 2 seconds

// One mistake
function calculateSum(){
    return sum(10,20);
}
setTimeout(calculateSum(), 2*1000);  // this is equivalent to setTimeout(30, 2*1000) which is incorrect, u r not passing any function anymore rather u are passing the value that function returns


// When u run the below code, it prints sum but also undefined is writte, why?
function sum(num1, num2, fnToPass){
    let result = num1+num2;
    fnToPass(result)
}
function displayResult(data){
    console.log("Result of the sum is: "+data);
}
console.log(sum(1,5,displayResult))  // because sum(1,5,displayResult) returns nothing, rather instead of this line just write, sum(1,5,displayResult)




// *** CALLBACK -> passing function as arguments to another function

function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
  
function sumOfSomething(a, b, callback){
    console.log(a);
    console.log(callback);  // it will print the callback function which is passed  
    const val1 = callback(a);
    const val2 = callback(b)
    return val1+val2;
}
  
const ans1 = sumOfSomething(2, 2, cube)
console.log(ans1)


// *** ANONYMOUS function  -> which doesn't have any name actually

function square(n){
    return n*n
}
function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}
sumOfSomething(a,b,function(a){    // rather than writing sumOfSomething(a,b,square) , we can define the square function then and there only as an argument while calling
    return a*a
})

  

function square(n){
    return n*n
}
//   function cube(n){
//     return n*n*n
//   }
function sumOfSomething(a, b, callback){
    console.log(a);
    console.log(callback);  // prints anonymous function
    const val1 = callback(a);
    const val2 = callback(b)
    return val1+val2;
}
const ans2 = sumOfSomething(2, 2, function(n){   // we can also name the function but we shouldn't because we can't use this function anywhere, so don't write like this "function cube(n)" in argument
    return n*n*n
})
console.log(ans2)

