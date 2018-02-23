var mongoose = require('mongoose');
//todo schema
var todoSchema = new mongoose.Schema({
    //using objects here so we can pass options
    //like default values and required or not
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//Todo Model
var Todo = mongoose.model('Todo', todoSchema);
//export the todo model which will be what's passed to the require function
module.exports = Todo;