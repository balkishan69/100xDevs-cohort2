/*  // Visualise this code on "latentflip.com/loupe"

console.log("hi")

setTimeout(function(){
    console.log("hi there from inside")
}, 2000)

setTimeout(function(){
    console.log("hi there from inside")
}, 2000)

let a = 0;
for(let i=0;i<10;i++){
    a+=1;
}
console.log("after")
*/

// CALLBACK HELL
console.log("hi")

setTimeout(function(){
    console.log("hi there from inside")

    setTimeout(function(){
        console.log("hi there from inside")

        setTimeout(function(){
            console.log("hi there from inside")
        }, 2000)    // inside async, inside async, inside async -> this is called "callback hell"

    }, 2000)

}, 2000)

let a = 0;
for(let i=0;i<10;i++){
    a+=1;
}
console.log("after")


// NOTE: In async, what if all the remaining code is dependent on the readFile -> then u can write the remaining code inside the function
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err,data) {
    
    // write all the remaining code here
    data = data + " harkirat was there";
    fs.writeFile();



    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})


// Reading the file and writing in it

const fs = require("fs");

function putCopyrightToFile(cb){
    fs.readFile("a.txt", "utf-8", function(err,data){
        data = data + " copyright 2020 balkishan";
        fs.writeFile("a.txt", function(){
            cb();
        })
    });
}

putCopyrightToFile(function(){
    console.log("copyright has been put")
})


// creating my own async function (just wrapping around another async function)
function myOwnSetTimeout(fn, duration){       // will this function go into the WebApi section of js architecture(in latentflip/loupe)? No, still setTimeout() function will go there and will be pushed back to the callback queue
                                              // This approach uses callback. You have created a function where other people can send a callback. This is good, but could lead to "callback hell"
    setTimeout(fn, duration);
}
myOwnSetTimeout(function(){
    console.log("hi there");
}, 1000)


// *** Callback hell

setTimeout(function(){
    console.log("hi there");

    setTimeout(function(){
        console.log("inside the second one");

        setTimeout(function(){
            console.log("inside the third one");
        }, 3000)
    }, 2000)
}, 1000)

// This indented code leads to callback hell, it would be nice if the code would be like this:(this would be done using promises and async await syntax)
waitFor(1000);
console.log("hi there")
waitFor(2000)
console.log("hi there")
waitFor(3000)
console.log("hi there")
// Promises are used to avoid callback hell



// *** PROMISE


// APPROACH 1 (Wrapping another async function)

function myOwnSetTimeout(callback, duration){    // this non-promisified function returned undefined
    setTimeout(callback, duration);   // here u are calling callback which is something that the end user gave you
}

myOwnSetTimeout(function(){    // calling the function
    console.log("hi there");
}, 1000)


// APPROACH 2 (using promises)  -> promise is just another class in javascript like date()

// const d = new Date();
// d.getMonth();


// Defining an async function using promise
function promisifiedmyOwnSetTimeout(duration){   // no callback argument, u will still expect the duration argument
    let p = new Promise(function(resolve){   // new Promise expects a first argument to be a function(), inside which the first argument is resolve
        // after 1 second, call resolve
        setTimeout(resolve, 1000);   // here u are calling resolve which is something that the promise object gave u
    });
    return p;   // this function is returning a promise
}
// this leads to something like "async await syntax" and "promise chaining"  both of which get rid of callback hell

// calling a promisified async function
const ans = promisifiedmyOwnSetTimeout(1000)
// if we log the ans, it will print:  promise {<pending>}
ans.then(function(){
    console.log("timeout is done");
});



// *** Async await and Promise Chaining  -> get rid of callback hell

function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
    return p;
}

//promise chaining
promisifiedTimeout(1000).then(function(){
    console.log("first is done");
    return promisifiedTimeout(2000)
}).then(function(){
    console.log("second one done")
});



// run the below code in latentflip.com/loupe and observe
console.log("at the top 1")
function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise(function(resolve){
        console.log("inside promise callback 4")
        setTimeout(function(){
            console.log("setTimeout called 5")
            resolve("done baby! I am burnt out.")
        }, 5000);
    });
}
console.log("in the middle 2")
promisifiedTimeout().then(function(value){
    console.log("promisified then 6")
    console.log(value);
});



//  .catch()

fs.readFile("a.txt", "utf-8", function(err,data){

});

fs.readFile("a.txt", "utf-8").then(function(data){

})

.catch(function(err){       // whenever there is any error, the promisified function will not call .then() , else it will call .catch() , also there is something called 'reject'

})   




//Arrow function

function sum(a,b){     // normal function
    return a+b;
}

app.get("/", function(req, res){

})



const sum = (a,b) => {    // Arrow function
    return a+b;
}

app.get("/", (req, res)=>{
    
})