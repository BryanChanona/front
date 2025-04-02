import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}
    collapsed = true;
    profilePicUrl = 'https://img.icons8.com/?size=100&id=7rcs0z3sdioE&format=png&color=000000';
    actionsExpanded = false;
  
    toggleSidenav() {
      this.collapsed = !this.collapsed;
    }
  
    toggleActions() {
      this.actionsExpanded = !this.actionsExpanded;
    }
  
    rutaSettings() {
      this.router.navigate(['settings']); // Redirección a home
    }
}
