document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const createTaskBtn = document.getElementById("createTaskBtn");
  const taskList = document.getElementById("taskList");

  function createTask() {
    const taskDescription = taskInput.value;
    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "x";
      removeBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(removeBtn);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }

  createTaskBtn.addEventListener("click", createTask);
});
