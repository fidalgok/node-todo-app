var db = require('../models');

exports.getTodos = function(req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        }).catch(function (err) {
            res.send(err);
        });
}

exports.createTodo = function (req, res) {
    //mongoose to create our todo
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        }).catch(function (err) {
            res.redirect('back');
        })
}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (todo) {
            res.json(todo);
        }).catch(function (err) {
            res.send(err);
        })
}

exports.updateTodo = function (req, res) {
    //findoneand update (how to look up and it's value, object with information about the update, return the newly updated entry)
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove({ _id: req.params.todoId })
        .then(function () {
            res.json({ message: "we deleted it!" });
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;