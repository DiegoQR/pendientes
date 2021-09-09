const todoName = document.querySelector("#todo-name-input");
const form = document.querySelector("#saludador-form");

const listOutput = document.querySelector("#list-output")

todoList = []



form.addEventListener("submit", event => {
    todoList.push(todoName.value);
    listOutput.innerHTML = todoList[0];
    //todoList.forEach(function(item) {
        
    //})
    
})
