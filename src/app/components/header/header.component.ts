import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  profilePicUrl = 'https://img.icons8.com/?size=100&id=7rcs0z3sdioE&format=png&color=000000';
  actionsExpanded = false;

  toggleSidenav() {
    this.collapsed = !this.collapsed;
  }

  toggleActions() {
    this.actionsExpanded = !this.actionsExpanded;
  }
}
