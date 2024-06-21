document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", addItem);
  document.querySelector("#todoInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
  });
});

function addItem() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const newTodoText = todoInput.value.trim();

  if (newTodoText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newTodoText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(removeBtn);
    todoList.appendChild(listItem);

    todoInput.value = "";
  }
}
