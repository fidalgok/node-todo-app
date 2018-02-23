var mongoose = require('mongoose');
mongoose.set('debug', true);
//connect to database
mongoose.connect('mongodb://localhost/todo-api');

//Allows us to use promises with Mongoose!
mongoose.Promise = Promise;