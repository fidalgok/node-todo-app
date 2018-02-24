var express = require('express'),
    router = express.Router(),
    db = require('../models');
//actually gets /api/todos because of the express router config in our app.js
//list all todos route
router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    }).catch(function(err){
        res.send(err);
    });
});

//Post route to create a todo

router.post('/', function(req, res){
    //mongoose to create our todo
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    }).catch(function(err){
        res.redirect('back');
    })
});

//get a todo
router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(todo){
        res.json(todo);
    }).catch(function(err){
        res.send(err);
    })
});

//Update route
router.put('/:todoId', function(req, res){
    //findoneand update (how to look up and it's value, object with information about the update, return the newly updated entry)
    db.Todo.findOneAndUpdate({ _id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
});

//Delete Route
router.delete('/:todoId', function (req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "we deleted it!"});
    })
    .catch(function(err){
        res.send(err);
    })
})

module.exports = router;