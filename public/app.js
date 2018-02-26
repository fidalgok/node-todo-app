//wait until the DOM has loaded
$(document).ready(function(){
    //if text input has anything in it, clear it out
    clearInput();
    
    $.getJSON('api/todos')
    .then(addTodos);
    //create todo handler
    $('#todoInput').keypress(function (event) {
        if(event.which === 13){
            createTodo();
        }
    });
    /* This syntax allows you to root the listener to something
    that's on the page when it loads (the ul with class of list), rather than just on the span
    itself. Since we are adding list items after page load with 
    Ajax requests and other things they don't get the event listener added
    at the time this occurs.You specify the span as the second argument to on()*/
    //delete todo handler
    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
       removeTodo($(this).parent());
             
    });

    //update todo handler
    $('.list').on('click', 'li', function(){
        completeTodo($(this));
    })

    
});

function addTodos(todos){
    //add todos to page here
    

    todos.forEach(todo => {
        addTodo(todo);
    });

}

function addTodo(todo){
    let newTodo = $(`<li class="task">${todo.name} <span>X</span></li>`);
    const todoList = $('.list');
    if (todo.completed) {
        newTodo.addClass("done");
    }
    
    newTodo.data('todo', {
        id: todo._id,
        status: todo.completed
    });
    todoList.append(newTodo);
    
}

function createTodo(){
    //send request to create todo
    const userInput = $('#todoInput').val();
    $.post('api/todos', {
        name: userInput
    })
    .then(function(newTodo){
       addTodo(newTodo);
       clearInput();
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
    var todoId = todo.data('todo').id;
    
    var deleteUrl = 'api/todos/' + todoId;
    $.ajax({
        method: "DELETE",
        url: deleteUrl

    })
    .then(function(data){
        todo.remove();
        
    })
}

function completeTodo(todo){
    var todoId = todo.data('todo').id;
    var todoStatus = todo.data('todo').status;
    var isDone = !todoStatus;
    var updateUrl = 'api/todos/' + todoId;

    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: {
            completed: isDone
        }
    })
    .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('todo').status = isDone;
     
    })
}

function clearInput(){
  $('#todoInput').val('');
}