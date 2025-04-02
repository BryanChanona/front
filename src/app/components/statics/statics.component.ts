import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrl: './statics.component.css'
})
export class StaticsComponent {
  collapsed = true;
  profilePicUrl = 'https://img.icons8.com/?size=100&id=7rcs0z3sdioE&format=png&color=000000';
  actionsExpanded = false;
  startDate: string = '';
  endDate: string = '';

  @Output() dateFilterApplied = new EventEmitter<{ startDate: string, endDate: string }>();

  applyDateFilter() {
    if (this.startDate && this.endDate) {
      this.dateFilterApplied.emit({ startDate: this.startDate, endDate: this.endDate });
    } else {
      alert('Por favor, selecciona un rango de fechas.');
    }
  }

  toggleSidenav() {
    this.collapsed = !this.collapsed;
  }

  toggleActions() {
    this.actionsExpanded = !this.actionsExpanded;
  }
}
