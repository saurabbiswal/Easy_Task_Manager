import { Component, signal } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  // Addig user from dummy users
  selectedUser = signal(DUMMY_USERS[randomIndex]) ; 

  get imagePath() {
    // selectedUser()    // is a signal, so we need to call it as a function
    // selectedUser().avatar  // to get the avatar property
    return 'assets/users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log('User selected:', this.selectedUser.set(DUMMY_USERS[randomIndex]));
  }

}
