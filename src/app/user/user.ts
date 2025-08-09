import { Component, Input, Output, EventEmitter } from '@angular/core';

type User = {
  id: string; // The user ID
  avatar: string; // The avatar image URL
  name: string; // The name of the user
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({required: true}) id!: string; // The user object with avatar and name
  // @Input({required: true}) avatar!:  string; // The avatar image URL
  // @Input({required: true}) name!: string; // The name of the user

  @Input({ required: true }) user!: User; // The user object with id, avatar, and name

  @Output() select = new EventEmitter<string>(); // Event emitter to notify parent component when a user is selected

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Using input() to create a signal for the avatar and name properties
  // these are read-only properties

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // });

  onSelectUser() {
    this.select.emit(this.user.id); // Emit the user ID when the user is selected
    return 'assets/users/' + this.user.avatar;
  }
}
