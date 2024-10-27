import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);
  imageInfo = computed(() => `Profile image of ${this.name()}`);

  onSelectUser() {}
}
