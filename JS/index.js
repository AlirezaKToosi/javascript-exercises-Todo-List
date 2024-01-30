let todos = [];

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

function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
  
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo.text;
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", () => completeTodo(index));
      li.appendChild(completeBtn);
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeTodo(index));
      li.appendChild(removeBtn);
      console.log(li);
      todoList.appendChild(li);
    });
  }

function completeTodo(index) {
  todos[index].completed = true;
  renderTodos();
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();
