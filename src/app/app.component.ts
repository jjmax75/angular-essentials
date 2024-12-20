import { Component } from '@angular/core';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  users = DUMMY_USERS;
}
