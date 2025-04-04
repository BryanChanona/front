import { Component, OnInit } from '@angular/core';
import { TableOxigenacionService } from '../services/table-oxigenacion.service';  // Importamos el servicio de oxigenación
import { FilterOxigenacionService } from '../services/filter-oxigenacion.service';  // Importamos el servicio para filtrar por fecha

@Component({
  selector: 'app-table-oxigenacion',
  templateUrl: './table-oxigenacion.component.html',
  styleUrls: ['./table-oxigenacion.component.css']
})
export class TableOxigenacionComponent implements OnInit {

  oxigenationData: any[] = [];  // Arreglo para almacenar los datos de oxigenación
  date: string = '';  // Variable para almacenar la fecha seleccionada

  constructor(
    private tableOxigenacionService: TableOxigenacionService,
    private filterOxigenacionService: FilterOxigenacionService // Inyectamos el servicio para filtrar por fecha
  ) { }

  ngOnInit(): void {
    // Obtener los datos sin filtrar al inicio (opcional)
    this.tableOxigenacionService.getOxigenationById().subscribe(
      (response: any) => {
        this.oxigenationData = response.data;  // Asignamos los datos a la variable 'oxigenationData'
      },
      error => {
        console.error('Error al obtener los datos de oxigenación', error);
      }
    );
  }

  // Método para filtrar los datos por fecha
  onFilterByDate(): void {
    if (this.date) {
      // Llamamos al servicio con la fecha seleccionada
      this.filterOxigenacionService.getOxygenByDate(this.date).subscribe(
        (response: any) => {
          this.oxigenationData = response.data;  // Asignamos los datos filtrados a la variable
        },
        error => {
          console.error('Error al obtener los datos por fecha', error);
        }
      );
    } else {
      console.error('Fecha no proporcionada');
    }
  }
}
