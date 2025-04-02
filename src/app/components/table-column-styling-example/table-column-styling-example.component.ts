import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  Id: number;
  Temperatura: number;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, name: 'Sayuri', Temperatura: 28.6, Status: 'Alto'},
  {Id: 2, name: 'Jared', Temperatura: 27.9, Status: 'Alto'},
  {Id: 3, name: 'Jared zuñiga', Temperatura: 29, Status: 'Alto'},
  {Id: 4, name: 'sayuri torres', Temperatura: 28.4, Status: 'Alto'},
  {Id: 5, name: 'JYS', Temperatura: 27.8, Status: 'Alto'}
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'table-column-styling-example',
  styleUrl: 'table-column-styling-example.component.css',
  templateUrl: './table-column-styling-example.component.html',
})
export class TableColumnStylingExample {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}
