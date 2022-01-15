const toDoForm = document.getElementById("todo-form");
const toDOInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDOInput.value;
    toDOInput.value="";
    paintTodo(newToDo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);
