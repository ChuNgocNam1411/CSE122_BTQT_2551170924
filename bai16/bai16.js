const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const remaining = document.getElementById("remaining");
function updateRemaining() {
    const tasks = taskList.querySelectorAll("li");
    let count = 0;
    tasks.forEach(function(task) {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (!checkbox.checked) {
            count++;
        }
    });
    remaining.textContent = count;
}
taskList.addEventListener("change", function(event) {
    if (event.target.type === "checkbox") {
        const task = event.target.closest("li");
        if (event.target.checked) {
            task.classList.add("completed");
        } else {
            task.classList.remove("completed");
        }
        updateRemaining();
    }
});
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const task = event.target.closest("li");
        task.remove();
        updateRemaining();
    }
});
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.className = "delete-btn";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
    updateRemaining();
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
updateRemaining();