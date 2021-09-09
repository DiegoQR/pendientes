const todoName = document.querySelector("#todo-name-input");
const form = document.querySelector("#saludador-form");
const type = document.querySelector("#type-input");

const listOutput = document.querySelector("#list-output");
const listTypeOutput = document.querySelector("#list-type-output");

todoList = [];
typeList = [];


form.addEventListener("submit", event => {
    todoList.push(todoName.value);
    typeList.push(type.value);
    listOutput.innerHTML = todoList;
    listOutput.innerHTML = typeList;
})
