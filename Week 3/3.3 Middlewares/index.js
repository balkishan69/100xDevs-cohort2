// *** This is one way of doing, although it is not the best way, we can do this using middleware

/*
const express = require('express');

const app = express();

// function that returns a boolean if the age of the person is more than 14
function isOldEnough(age){
  if(age>=14){
    return true;
  }
  else {
    return false;
  }
}

app.get("/ride1", function(req, res){    // these all route handlers have the access to the third argument "next" apart from the req and res, though we don't actually need it so we don't write
  if(isOldEnough(req.query.age)){     // give the age in the query string as input as "/ride1?age=30" in the url
    res.json({
      msg: "you have successfully riden the ride 1"
    })
  } else{
      res.status(411).json({
        msg: "sorry you are not of age yet"
      })
  }
  
})

app.get("/ride2", function(req, res){
  if(isOldEnough(req.query.age)){     // give the age in the query string as input as "/ride1?age=30" in the url
    res.json({
      msg: "you have successfully riden the ride 2"
    })
  } else{
      res.status(411).json({
        msg: "sorry you are not of age yet"
      })
  }

})

app.listen(3000);
*/



// *** Using middlewares

const express = require('express');

const app = express();


// Defining a middleware function (this is not called yet) -> the biggest benefit of middleware is that your final route only needs to do what it was originally supposed to do, and not what it was supposed to do before
function isOldEnoughMiddleware(req, res, next){
  const age = req.query.age;
  if(age>=14){
    next();   // if the age is more than 14, then here we are propagating to the next middleware
  } else{
    res.json({
      msg: "sorry you are not of age yet",
    })
  }
}

// Note: if u know that a particular middleware gets called in very route handler, then just remove the middleware fromm all routes and write:
// app.use(isOldEnoughMiddleware);
// Note: app.use() only triggers for all the endpoints below the app.use(), if u write this at the top then it triggers for all the routes and if u write this at the bottom then it is no longer used for any route

app.get("/ride1", isOldEnoughMiddleware, function(req,res){    // called the middleware function here, defined the series
  res.json({
    msg: "you have successfully riden the ride 1"
  });
});

app.get("/ride2", isOldEnoughMiddleware, function(req, res){    // if u are using "app.use(isOldEnoughMiddleware)" then remove the middleware from all the routes just write "app.get('ride2', function(req, res){ }"
  res.json({
    msg: "you have successfully riden the ride 2"
  });
});

app.listen(3000);