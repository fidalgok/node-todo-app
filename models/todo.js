//todo schema
var mongoose = require('mongoose');

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
})