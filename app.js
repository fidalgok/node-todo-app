var express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000;

//configure app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//override with POST have a delete or put method example form action: ?_method=DELETE
app.use(methodOverride('_method'));

//Routes

var todoRoutes = require('./routes/todo');

app.get('/', function(req, res){
    res.send("hello from root route!");
});

//uses the express router to handle our routes
app.use('/api/todos', todoRoutes);

//Set up Server Listener
app.listen(PORT, function(){
    console.log('server started on port ' + PORT);
})
