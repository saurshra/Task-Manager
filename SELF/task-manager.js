let taskManage = [];

function taskClick() {
  let inputElement = document.querySelector("#task-description");
  let dateElement = document.querySelector("#task-due-date");

  let inputValue = inputElement.value;
  let dateValue = dateElement.value;

  if (inputValue && dateValue) {
    taskManage.push({ task: inputValue, dueDate: dateValue, completed: false });
  } else {
    alert("Plese enter both field");
  }
  showTask();

  inputElement.value = "";
  dateElement.value = "";
}

function showTask() {
  let taskElement = document.querySelector("#task-list");
  let newHTML = "";
  for (let i = 0; i < taskManage.length; i++) {
    let { task, dueDate, completed } = taskManage[i];
    let status = completed ? "Completed" : "Incompleted";

    newHTML += `
   <span>${task}</span>
    <span>${dueDate}</span>
    <span> Status: ${status}</span>
    <button onclick = "markAsComplete(${i})">Complete</button>
    <button id ='btn-delete' onclick = 'taskManage.splice
      (${i}, 1),showTask();
    '>Delete</button>
  `;
  }
  taskElement.innerHTML = newHTML;
}

function markAsComplete(index) {
  taskManage[index].completed = true;
  showTask();
}
