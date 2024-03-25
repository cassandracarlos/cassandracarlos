let todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function removeTodo(index) {
    todos.splice(index, 1);
}

function displayTodos() {
    console.log("Todos:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

addTodo("Learn JavaScript");
addTodo("Build a to-do list app");
displayTodos();
removeTodo(0);
displayTodos();
