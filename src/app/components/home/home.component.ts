import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
