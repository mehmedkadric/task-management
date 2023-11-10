export interface Task {
    title: string;
    description: string;
    completed: boolean;
}

export class TaskManager {
    private tasks: Task[] = [];
  
    addTask(task: Task): void {
      this.tasks.push(task);
    }
  
    listTasks(): void {
      console.log('Tasks:');
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title} - ${task.description} [${task.completed ? 'Completed' : 'Incomplete'}]`);
      });
    }
  }