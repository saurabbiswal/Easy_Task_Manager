import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './userModel';
import { Card } from '../shared/card/card'; // Importing the User type

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User; // The user object with id, avatar, and name
  @Input({ required: true }) selected!: boolean; // Indicates if the user is selected

  @Output() select = new EventEmitter<string>(); // Event emitter to notify parent component when a user is selected

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Method to handle user selection
  onSelectUser() {
    this.select.emit(this.user.id); // Emit the user ID when the user is selected
    return 'assets/users/' + this.user.avatar;
  }
}
