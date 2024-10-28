import { Component } from '@angular/core';
import { UserComponent } from '../../user/user.component';
import { DUMMY_USERS } from '../../../dummy-users';
import { TasksComponent } from '../../tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserComponent, TasksComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  users = DUMMY_USERS;
  selectedUser = 0;

  onSelectUser(id: string) {
    this.selectedUser = this.users.findIndex((user) => user.id === id);
  }
}
