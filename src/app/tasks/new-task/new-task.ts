import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
