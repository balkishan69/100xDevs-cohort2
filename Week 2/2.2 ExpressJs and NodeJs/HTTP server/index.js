// CREATING AN HTTP SERVER (using express)

/*

First of all run these commands in terminal:
npm init -y
npm install express

*/



const express = require('express')    // importing express library, run "npm install express" in terminal
const bodyParser = require("body-parser");   //importing body-parser after installing body-parser by 'npm install body-parser'

const app = express()
const port = 3000   // const port = process.env.PORT || 3000     -> process.env.PORT is environment variable    Write "export PORT=3005" in terminal, and run node index.js server will port on 3005,  if u write "export PORT=3006" and then run node index.js then it will start the server on port 3006

app.use(express.json())

//middlewares
app.use(bodyParser.json());   // for body-parser

app.get('/', (req, res) => {       //get request
  res.send('<b>Hello World!<b>')
})

/*
// chatgpt server request would somewhat look like this
app.post('/backend-api/conversation', function(req, res){     // with post request, people can send some data alone
    // run a machine learning model
    res.send('hello world!')   // means wht r u sending back with
})
*/

app.get('/', (req, res) => {       //get request
    console.log(req.headers.authorization);
    setTimeout(function(){
        res.status(401).send('<b>Hello World!<b>')   // we can also send status codes
    }, 1000);
    
})

// fetch -> to fetch something  -  fetch("https://localhost:3000/", {method:"POST"}).then(function)

app.post('/conversations', (req, res) => {
    // console.log(req.body)   -> logging undefined why... search and know how can i fix this, we have to use body parser
    console.log(req.headers)
    console.log(req.body.message)   // whatever the user is sending me,i am able to access it
    const message = req.query.message      // query parameters -> another way to send information to your backend --> go to post add queries in the url itself like  ?message=123&b=1&a=1
    console.log(message)
    console.log(req.headers["authorization"])    // or, console.log(req.headers.authorization);      // Add authorization in the headers of postman and then test it
    res.send({
        msg: "2+2=5"
    })
})

app.get("/route-handler", function(req, res){      // type "localhot:3000/route-handler" in browser to get the json object output
    // req -> contains headers, body, query parameters
    //do some machine learning model code
    // res.send("hello world");
    res.json({   //javascript object
        name: "balkishan",
        age: 20
    })
})

app.listen(port, () => {     // starting the http server
  console.log(`Example app listening on port ${port}`)
})

// run "node index.js" in the terminal to run the code
// go to "localhost:3000" to view the working of code


/*
Q. Why express doesn't parse the body by default?
Ans. We can use body-parser. The body-parser module enables us to parse incoming request bodies in a middleware. Express.js server needs to know what type of data you're sending over the network, so it knows how to parse it.
*/
