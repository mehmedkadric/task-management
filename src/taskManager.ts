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
  
    listTasks(): Task[] {
      return this.tasks;
    }
  }