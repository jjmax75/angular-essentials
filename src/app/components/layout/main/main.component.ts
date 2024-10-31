import { Component } from '@angular/core';

import { UserComponent } from '../../user/user.component';
import { TasksComponent } from '../../tasks/tasks.component';
import { User } from '../../user/user.model';

import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TasksComponent, UserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
