# TODo App
This app uses Node, Mongo, and Express in order to provide a simple single page todo app.

## Routes
Verb    Route               Description
GET     /api/todos          List all todos
Post    /api/todos          Create a todo
GET     /api/todos/:todoid   Retrieves a todo
PUT     /api/todos/:todoid   Update a todo
DELETE  /api/todos/:todoid   Delete a todo

## App Organization
All Database models can be found in the models folder

All Routes can be found in the routes folder

Helper functions for API route callbacks are found in the helpers folder

