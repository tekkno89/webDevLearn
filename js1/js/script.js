var todolist = [];
var input = '';

function listTodos(todoItem, todoIndex) {
    console.log(todoIndex + ':' + todoItem);
}

function checkTodoIndex(todoIndex) {
    if (todoIndex <= todolist.length && todoIndex > 0) {
        return true;
    }
}


while (input !== 'quit') {
    var input = prompt('what would you like to do');
    if (input === 'list') {
        todolist.forEach(listTodos);
    } else if (input === 'add') {
        var additem = prompt('what would you like to add to the list');
        todolist.push(additem);
    } else if (input === 'delete') {
        var delitem = prompt('what would you like to delete');
        var checkItem = checkTodoIndex(delitem);
        if (checkItem === true) {
            todolist.splice(delitem,1);
        } else {
            console.log('that todo item does not exist');
        }
    }
}

console.log('thanks for using todo list');
