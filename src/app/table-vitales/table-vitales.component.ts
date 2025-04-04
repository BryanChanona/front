import { Component, OnInit } from '@angular/core';
import { TableRitmeService } from '../services/table-ritme.service';  // Importamos el servicio de ritmo cardiaco
import { FilterRitmoService } from '../services/filter-ritmo.service';  // Importamos el servicio para filtrar por fecha

@Component({
  selector: 'app-table-vitales',
  templateUrl: './table-vitales.component.html',
  styleUrls: ['./table-vitales.component.css']
})
export class TableVitalesComponent implements OnInit {

  heartRates: any[] = [];  // Arreglo para almacenar los datos
  date: string = '';  // Variable para almacenar la fecha seleccionada

  constructor(
    private tableRitmeService: TableRitmeService,
    private filterRitmoService: FilterRitmoService // Inyectamos el servicio para filtrar por fecha
  ) { }

  ngOnInit(): void {
    // Obtener los datos sin filtrar al inicio (opcional)
    this.tableRitmeService.getHeartRatesById().subscribe(
      (data: any) => {
        this.heartRates = data.data;  // Asignamos los datos a la variable 'heartRates'
      },
      error => {
        console.error('Error al obtener los datos de ritmo cardiaco', error);
      }
    );
  }

  // Método para filtrar los datos por fecha
  onFilterByDate(): void {
    if (this.date) {
      // Llamamos al servicio con la fecha seleccionada
      this.filterRitmoService.getHeartRateByDate(this.date).subscribe(
        (data: any) => {
          this.heartRates = data.data;  // Asignamos los datos filtrados a la variable
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
