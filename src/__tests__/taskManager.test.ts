import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { TaskManager, Task } from '../taskManager.ts';

Deno.test("TaskManager - addTask adds a task to the task list", () => {
  const taskManager = new TaskManager();
  const task: Task = { title: 'Test Task', description: 'Testing', completed: false };
  taskManager.addTask(task);

  assertEquals(taskManager.listTasks(), [task]);
});

Deno.test("TaskManager - listTasks returns the list of tasks", () => {
  const taskManager = new TaskManager();
  const tasks: Task[] = [
    { title: 'Task 1', description: 'Description 1', completed: false },
    { title: 'Task 2', description: 'Description 2', completed: true },
  ];

  tasks.forEach((task) => taskManager.addTask(task));

  assertEquals(taskManager.listTasks(), tasks);
});
