import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './taskModel';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
