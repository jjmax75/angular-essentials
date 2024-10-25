import { Component } from '@angular/core';
import { UserComponent } from '../../user/user.component';
import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  title = 'angular-essentials';
  users = DUMMY_USERS;
}
