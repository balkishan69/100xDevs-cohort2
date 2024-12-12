/*
const express = require("express");

const app = express();

// RATE LIMITTING - limitting the no. of requests sent per second by a person 
function ratelimitter(){

}

//calculating no. of requests   -> calcualting the load on the server
let numberOfRequests = 0;
function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/health-checkup",calculateRequests, ratelimitted, function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username != "balkishan" || password != "pass"){
    res.status(400).json({"msg": "something went wrong with the inputs"})
    return;   -> returning/exiting early
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({"msg": "something went wrong with the inputs"})
    return  // instead of writing return, we can also put the below code in else()
  }

  //do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })

});

app.listen(3000);
*/



// *** Another way of doing all the above code using "middlewares" - way of doing validation checks

const app = express();

function userMiddleware(req,res,next){
    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            msg: "Incorrect input",
        });
    } else{
        next();
    }
};

//we can get/access the data from userMiddleware() funcion to kidneyMiddleware() function using req.user=something (i.e., add to the req object)

function kidneyMiddleware(req,res,next){
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req,res){
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, function(req, res){
    // do something with user here

    res.send("Your heart is healthy");
});




// *** Important part of middleware - app.use()

/*
const express = require("express");

const app = express();

// rate limitting
let numberOfRequests = 0;

function calculateRequests(req, res, next){
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}

app.use(express.json());  // to access the body of the request in the postman(it's also kind of middleware), we don't require app.use() for the req.headers or req.query but for req.body we need this because body can be json,text, html,javacript etc, see in the dropdown in body section of postman

app.use(calculateRequests)   // if i know that a middleware needs to be called in every route then we use like this->  'after this line'(iss line ke neeche waale saare routes pe) any request that comes to any route will have this middleware called but only when the next() is called in the middleware function

app.post("/health-checkup", function(req,res){        // otherwise u would have to include the middleware 'calculateRequests' in every route
  console.log(req.body);
  
  res.json({
    msg: "hi there"
  })
});

app.get("/health-checkup2", function(req,res){
  
});

app.listen(3000);
*/



/*
// *** INPUT VALIDATION 

const express = require("express");

const app = express();

app.use(express.json());   // since we are doing post() request and extracting body, this line should be kept before all the routes

app.post("/health-checkup", function(req, res){
  // user gives an array of kidneys as input e.g. [1,2];
  const kidneys = req.body.kidneys;
  if(!kidneys){   // input validation check, but this is ugly way, better way is to use "Zod library"
    res.json({
      msg: "wrong inputs"
    })
  } else{   // there is another way if inputs are incorrect by the user, is that using "Global Catches", now we don't have to use if-else
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + "kidneys");
  }

});

app.listen(3000);
*/



/*
// *** GLOBAL CATCHES - this is another type of middleware (it is error-handling middleware), for returning any error msg if the user has hit the server with some wrong inputs
// if any exception(error) is hit on any of the above routes then the flow comes her to handle the error with a nice message, add this at the end of all the routes

const express = require("express");

const app = express();

app.use(express.json());   // since we are doing post() request and extracting body, this line should be kept before all the routes


// we can also implement middleware like this
// function middleware(req, res, next){  
//   fetch().then(){
//     next()
//   }
// }


app.post("/health-checkup", function(req, res){
  // user gives an array of kidneys as input e.g. [1,2];, if ever there is some exception with the input then control will reach at the end to the global catches
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + "kidneys");

});

// global catches - always write at the end, after all the routes
app.use(function(err, req, res, next){  // takes 4 inputs instead of 3
  // console.error(err);  //log the error for debugging
  errorCount++;   // for tracking the number of errors 
  res.json({
    msg: "sorry something is up with our server"   // or res.status(500).send("An internal server error occurred");
  })
})

app.listen(3000);
*/




/*
// *** Zod => for input validation

const express = require("express");

const zod = require("zod");   // importing the zod library for better input validation

const schema = zod.array(zod.number())   // checks whether input given by user is an array of numbers(kidneys array in this case) or not, see zod documentation for more info

const app = express();

app.use(express.json()); 

app.post("/health-checkup", function(req, res){
  //input- e.g. {"kidneys": [1,2]}
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys)     // checks if kidneys input is array of number -> returns 'success':'true' or 'false'
  if(!response.success){  
    res.status(411).json({
      msg: "input is invalid"
      console.log(resonse.errors)
    })
  } else{
    res.send({
      response  
    })
  }

});

app.listen(3000);


// Without zod, we would had to do something like this:
// if this is an array of number with atleast 1 input, return true else return false

function validateInput(arr){
     if(typeof arr=="object" && arr.length>=1 && typeof arr[0]=="number" && arr.every((item) => typeof item=="number")){

     }
}

*/


/*
// How to create zod schema for validating these inputs...
{
  email: string => should look like email
  password: atleast 8 letters
  country: "IN", "US"
}

Ans.
// we can import this as z or zod(const z or zod) but then use the same everything in the code
const z = require('zod');

const schema = z.object({   
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number())
})

const input=({
  email: "balkishanmandal30@gmail.com",
  password: "balkishanmandal",
  country: "IN",
  kidneys: [1,2,3]
})

const response=schema.safeParse(input);
console.log(response)

Note: read the zod documentation


*/


/*
// we can also use zod independently without using express
const zod = require("zod");

// if this is an array of numbers with atleast 1 input, then return true else return false
function validateInput(arr){
  const schema = zod.array(zod.number());

  const response = schema.safeParse(arr);
  console.log(response);
}

validateInput([1,2,3]);
*/


/*
const zod = require("zod");

function validateInput(obj){
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "balkishan@gmail.com",
  password:  "4498545895889"
});
*/


/* Facebook login server prototype - To get the postman server link of facebook, go to facebook.com > dummy login> inspect> Network> All> Name> login/?login_attempt> right click and copy> copy as cURL> paste in the postman link section

const zod = require("zod");

function validateInput(obj){
  const schema = zod.object({
    email: zod.string().email().endsWith("@gmail.com").required().message("Invalid email address"),
    password: zod.string().min(8)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/login", (req, res) => {
  const inputs = req.body;
  const response = validateInput(inputs);
  if(!response.success){
    res.json({
      msg: "Your inputs are invalid";
    })
    return;
  }
})


// Note: see the notes by harkirat, there is a section in input validation, "Coercion" ->means to push someone to do something


const express = require("express");
const app = express();
app.get("/", function(req, res) {     // req,res,next -> it has next already it's just that we don't write it for the last route, no point of calling next for the last route
    console.log(next);
    res.json({ 
      msg: "done"
    })
})


app.use(function(err, req, res, next) {     // this is a global catch to give nice error message
    res.send({
        msg: "internal error"
    })
})
app.listen(3000);

*/