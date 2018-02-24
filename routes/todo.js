var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    helpers = require('../helpers/todos'); //callback functions for our routes

//actually gets /api/todos because of the express router config in our app.js
router.route('/')
    .get(helpers.getTodos) //List all todos
    .post(helpers.createTodo); //Post route to create a todo

router.route('/:todoId')
    .get(helpers.getTodo)   //get a todo
    .put(helpers.updateTodo) //Update route
    .delete(helpers.deleteTodo); //Delete Route

module.exports = router;