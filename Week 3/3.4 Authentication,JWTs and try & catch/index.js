// *** AUTHENTICATION -> jwt

const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
  name: "balkishan",
  accountNumber: 123123123
}

// generating jwt -> function for this is sign()
const token = jwt.sign(value, "secret");    // the token will be generated using this secret and hence this token can only be verified using this secret
console.log(token);   // this will return a very long string which is jwt(json web token). This is just like a bank checkbook, anyone can see the signature and try to replicate it but the bank will reject it. This can be decoded by anyone and can see the original content/data (by going to jwt.io website) but only backend with that secret will be able to verify it not anyone else
/*
let's say someone else decoded your token and got the data (name: "balkishan", accountNumber: 123123123) and now trying to recreate the thing, will that work?
// let's say this person is the intruder(frauder)
const jwt = require("jsonwebtoken");
const contents = {
  "name": "harkirat",
  "accountNumber": 123123123,
  "iat": 1703108524
}
const newToken = jwt.sign(contents, "jhgkjfk", {expiresIn: "1h"});   // the person doesn't know the secrete key(here it is, "jhgkjfk"), so he can't recreate the token
console.log(newToken);   // this gives the jwt but the server would not verify this, try this copy the jwt

const value = {
  name: "harkirat",
  accountNumber: 123123123
}
const token = jwt.verify("<paste the copied token from above", "secret");  // it says invalid signature since the secret is different
*/

// this token has been generated using this 'secret', and hence this token can only be verified using this secret



// *** try-catch -> if we know that some code may give error then we wrap that inside try-catch block
// like jwt.verify() will either verify successfully or will throw an error so we can wrap that inside try-catch

try{
    let a;
    console.log(a.length);   // undefined
    console.log("hi there from inside");
}catch(e){
    console.log("inside catch statement");
}
//try catch syntax -> if any error/exception occurs in try block then try block code execution will stop there and catch block will be executed, and rest all the code outside try catch will be executed too.
  
console.log("hi there"); 



// *** week-3/02-jwt assignments

// Note: clone the assignment from the github, navigate to the folder in the terminal and run "npm install"
// go to assignments/week 3/02-jwt/ README.md to see the problems

const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require('zod');

// Problem Statement 1 - Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if(!usernameResponse.success || !passwordResponse.success){
    return null;
  }
  
  const signature = jwt.sign({
    username
  }, jwtPassword)
  
  return signature;
}


// Problem statement 3 Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
function verifyJwt(token){
  /*
  const verified = jwt.verify(token, jwtPassword);
  if(verified){
    return true;
  } else{
    return false;
  }
  // but only this will throw an error, because verify() is different from decode(), decode() either returns true or false but verify() if returns null then it throws an error and stops the execution, hence wrap it in try-catch syntax 
  */
  let ans = true;
  try{
    // const ans = jwt.verify(token, jwtPassword);     // we could also do like this, but the assignment only says to return true or false so not required
    jwt.verify(token, jwtPassword);
  } catch(e){
    ans = false;
  }
  return ans;
  
}


// Problem Statement 2  - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
function decodeJwt(token){
  // true, false
  const decoded = jwt.decode(token);    // decoding doesn't need that secret key(but verification needs), it's similar to me going to jwt.io and decoding the token
  if(decoded){
    return true;
  }
  else{
    return false;
  }
}


// To test, go to the 02-jwt folder, install the libraries first like zod, jsonwebtoken and then run `npx jest ./tests`
