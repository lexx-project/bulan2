const tasks = [
  { id: 1, description: "Tidur", completed: false },
  { id: 2, description: "Makan", completed: true },
  { id: 3, description: "Belajar", completed: true },
];

function addTask(newTask) {
  tasks.push(newTask);
}

function getAllTask() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(
      `ID: ${tasks[i].id}, Deskripsi: ${tasks[i].description}, Selesai: ${tasks[i].completed}`
    );
  }
}

function deleteTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (id === tasks[i].id) {
      tasks.splice(i, 1);
    }
  }
}

export { addTask, getAllTask, deleteTask, tasks };
