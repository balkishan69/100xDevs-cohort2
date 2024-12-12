
const express = require("express");
const app = express();

app.use(express.json());


// Now we have to do input validation(using zod) that the user is sending the right inputs -> it is done in types.js file
// body{
//     title: String,
//     description: string
// }
app.post("/todo", function(req,res){

})

app.get("/todos", function(req,res){
    

})

app.put("/completed", function(req,res){

})