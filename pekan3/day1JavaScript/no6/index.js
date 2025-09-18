import { addTask, getAllTask, deleteTask, tasks } from "./taskService.js";

addTask({ id: 5, description: "Ngoding", completed: false });
getAllTask();
deleteTask(3);
getAllTask();
console.log(tasks);
