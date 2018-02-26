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
//set up a static folder name so express knows where to find static html files
//__dirname is a express variable that points to the current directory you're in
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//Routes

var todoRoutes = require('./routes/todo');

app.get('/', function(req, res){
    res.sendFile('index.html');
});

//uses the express router to handle our routes
app.use('/api/todos', todoRoutes);

//Set up Server Listener
app.listen(PORT, function(){
    console.log('server started on port ' + PORT);
})
