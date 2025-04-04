import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent {
  @Output() dateSelected: EventEmitter<string> = new EventEmitter<string>();

  selectedDate: string = '';

  applyDateFilter() {
    this.dateSelected.emit(this.selectedDate); // Emitimos la fecha seleccionada al componente padre
  }
}
