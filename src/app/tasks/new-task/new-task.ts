import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Listens to form submissions
import { NewTaskData } from '../task/taskModel';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
    console.log('Task creation cancelled');
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      description: this.enteredDescription,
      dueDate: this.enteredDueDate,
    });
    console.log('New task submitted:', {
      title: this.enteredTitle,
      description: this.enteredDescription,
      dueDate: this.enteredDueDate,
    });
  }
}
