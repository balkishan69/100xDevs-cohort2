
const express = require("express");
const { createTodo, updateTodo } = require("./types");   // importing
const app = express();

app.use(express.json());


// Now we have to do input validation(using zod) that the user is sending the right inputs -> it is done in types.js file
// body{
//     title: String,
//     description: string
// }
app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "you sent the wrong inputs",
        })
        return;
    }

    // put it in mongodb
    await todo.create({    // you should await for the thing to actually reach the database before u tell the user that to do created
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});  // since this will be a promise, (you could also put conditions here for certain data to find)
    res.json({
        todos
    });
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "you sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body._id

    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})