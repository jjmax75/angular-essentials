import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { UserComponent } from '../../user/user.component';
import { TasksComponent } from '../../tasks/tasks.component';

import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, NgFor, TasksComponent, UserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
