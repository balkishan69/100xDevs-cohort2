/*
mongoose schema:

Todo {
    title: string;
    description: string;
    completed: boolean
}
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://balkishanmandal30:B%401234567890l@cluster0.zdcrc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}