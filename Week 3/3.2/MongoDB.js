// DATABASE - Mongodb assignment, see the harkirat notes in this folder only, last page


const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');    // lets u connect to the database
mongoose.connect("mongodb+srv://balkishanmandal30:B%401234567890l@cluster0.zdcrc.mongodb.net/my_users_app?retryWrites=true&w=majority")    // copy this link from the mongodb compass app or from mongodb.com, "my_users_app" is the database name we have created
// this much url is also enough just add the database name after slash '/' at the end
// mongodb+srv://balkishanmandal30:B%401234567890l@cluster0.zdcrc.mongodb.net/my_users_app

// describing the schema of my database(model) -> how my database will look like(structure)
const User = mongoose.model('users', { name: String, email: String, password: String });    // here "users" is the table in our database

/*
we can create users in our database like this

const user=new User({name: 'Harkirat Singh', email: 'abc@gmail.com', password: '123456'});
user.save();  // this will actually save the user in my database
*/

app.post("/signup", async function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email: username, name: name});   // findOne() function is used to find the first document that matches the database, this is similar to going to mongodb app and click on find and search for the data
  // similarly, there is user.update() , user.delete()
  // CRUD => create, update, delete, read   -> see mongoose docs
  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  // Note: images and videos are stored in the cloud (object stores & S3), only texts can be stored in database directly
  
  const user = new User({ 
    name: name, 
    email: username, 
    password: password 
  });

  // i could also do the above like this:
  // await User.create({ name: name, email: isername, password: password});

  user.save();
  res.json({
    "msg": "user created successfully"
  })
})

app.listen(3000);



/*

jwt.sign({
    type:"forgotPassword",
    "name": "balkishan",
    expiresAt: new Date.getTime()+3600
}, "password")




fetch("asd.com", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
})

*/




/*
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "your_mongo_url",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
*/




// We can create multiple backend servers, like create the multiple js files and run on different ports and start the server in different terminals at same time
