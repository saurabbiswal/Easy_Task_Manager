import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { NewTaskData } from './task/taskModel';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string; //'?'- Optional input for the name of the tasks component
  @Input({ required: true }) Id!: string; // Optional input for the user ID to filter tasks
  isAddingTask = false; // Flag to indicate if a new task is being added

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      description: 'Learn the basic + advanced features of Angular-20',
      dueDate: '2025-10-15',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Complete Project',
      description: 'Finish the Angular project by the end of the month',
      dueDate: '2025-10-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Review Code',
      description: 'Go through the codebase and refactor where necessary',
      dueDate: '2025-11-05',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Prepare Presentation',
      description: 'Create slides for the upcoming project presentation',
      dueDate: '2025-11-10',
    },
    {
      id: 't5',
      userId: 'u1',
      title: 'Attend Workshop',
      description: 'Participate in the Angular workshop next week',
      dueDate: '2025-11-20',
    },
  ]; // Sample tasks data

  // Method to filter tasks based on the user ID
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.Id);
  }

  // Method to handle task completion
  onCompleteTask(Id: string) {
    // Keep every task except the one whose id equals the given Id.
    this.tasks = this.tasks.filter((task) => task.id !== Id);
    console.log('Task with ID ${taskId} completed and removed from the list.');
  }
  // Method to handle adding a new task
  onStartAddTask() {
    this.isAddingTask = true;
    console.log('Add Task button clicked');
    // Logic to open a modal or navigate to a new task form can be added here
  }

  // Method to handle cancellation of adding a new task
  onCancelAddTask() {
    this.isAddingTask = false;
    console.log('Add Task cancelled');
  }
  // Method to handle task creation (to be implemented)
  onCreateTask(taskData: NewTaskData) {
    // push a new task to the tasks array
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.Id,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
    });
    this.isAddingTask = false; // Reset the adding task flag
    console.log('New task created:', taskData);
  }
}
