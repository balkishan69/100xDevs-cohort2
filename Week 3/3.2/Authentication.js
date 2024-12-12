// AUTHORIZATION concept by doing an assignment, see the harkirat notes

const express = require("express");
const jwt = require("jsonwebtoken");   // a library for json web tokens -> some common methods: jwt.sign and jwt.verify
const jwtPassword = "123456";   // jwt requires password, this should be correct to verify the authorization web token

const app = express();

app.use(express.json());   // Don't forget to write this 

const ALL_USERS = [    // in-memory database of some users
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists = true;
    }
  }
  return userExists;

  // this can also be done using the "find" function in js, search it
}

app.post("/signin", function (req, res) {   // send the request from postman, go to Body> select raw> select JSON and give the username & password in json like this: { "username": "balkishan", "password": "123456"}
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);   // encrypted the username into token
  return res.json({    // returns the token to end user
    token,  // copy the returned json web token and paste it in the jwt.io and u can decode ur token into data
    // expiresAt: new Date().getTime()+3600;    => to let the token expire at some time
  });
});

app.get("/users", function (req, res) {   // copy the returned web token and now go to /users in the postman, send a get request, add the "Authorization" parameter in the headers and paste the token in the value with "Bearer" written before it like chatgpt(it's not necessary althoug), now u can see the data in the response
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);   // verify requires password but decoding doesn't ->  gives back the original json object -> username & iat 
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
     // users: ALL_USERS  // this will return all the users from the in-memory database, but we have to return users other than this username as per the task, so we will "filter" the users array
      users: ALL_USERS.filter(function(value){
        if(value.username==username){
          return false;
        } else{
          return true;
        }
      })
    })
  } catch (err) {   // way to catch the errors
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)