let todos = [];

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    //********************************************************************* */
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="material-icons">done</i>';
    completeBtn.addEventListener("click", () => completeTodo(index));
    li.appendChild(completeBtn);

    //********************************************************************* */
    const moveUpBtn = document.createElement("button");
    moveUpBtn.innerHTML = '<i class="material-icons">keyboard_arrow_up</i>';
    moveUpBtn.addEventListener("click", () => moveTodoUp(index));
    li.appendChild(moveUpBtn);
    //********************************************************************* */
    const moveDownBtn = document.createElement("button");
    moveDownBtn.innerHTML = '<i class="material-icons">keyboard_arrow_down</i>';
    moveDownBtn.addEventListener("click", () => moveTodoDown(index));
    li.appendChild(moveDownBtn);

    //********************************************************************* */
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="material-icons">delete</i>';
    removeBtn.addEventListener("click", () => removeTodo(index));
    li.appendChild(removeBtn);

    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const text = todoInput.value.trim();

  if (text !== "") {
    const newTodo = { text, completed: false, timestamp: new Date() };
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
}

function completeTodo(index) {
  todos[index].completed = true;
  renderTodos();
}

function moveTodoUp(index) {
  if (index > 0) {
    const temp = todos[index];
    todos[index] = todos[index - 1];
    todos[index - 1] = temp;
    renderTodos();
  }
}

function moveTodoDown(index) {
  if (index < todos.length - 1) {
    const temp = todos[index];
    todos[index] = todos[index + 1];
    todos[index + 1] = temp;
    renderTodos();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();
