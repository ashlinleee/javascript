const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];
function addTask(taskName) {
  tasks.push({ name: taskName, completed: false });
  displayTasks();
}
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTask(index));
    taskList.appendChild(li);
  });
}
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    addTask(taskName);
    taskInput.value = '';
    hideTaskForm();
  }
});
document.getElementById('displayButton').addEventListener('click', displayTasks);
document.getElementById('editButton').addEventListener('click', () => {
  alert('Edit functionality not implemented yet.');
});
document.getElementById('addButton').addEventListener('click', () => {
  document.getElementById('taskForm').style.display = 'block';
});
function hideTaskForm() {
  document.getElementById('taskForm').style.display = 'none';
}
displayTasks();
