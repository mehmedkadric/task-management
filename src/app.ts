import { TaskManager } from './taskManager.ts';

const taskManager = new TaskManager();

function main() {
  taskManager.addTask({ title: 'Complete assignment', description: 'Finish by Friday', completed: true });
  taskManager.addTask({ title: 'Read book', description: 'Science fiction novel', completed: false });
  taskManager.listTasks();
}

main();
