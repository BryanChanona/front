import { Component, OnInit } from '@angular/core';
import { TableTemperatureService } from '../services/table-temperature.service';  // Importamos el servicio de temperatura
import { FilterTemperaturaService } from '../services/filter-temperatura.service';  // Importamos el servicio para filtrar por fecha

@Component({
  selector: 'app-table-temperature',
  templateUrl: './table-temperature.component.html',
  styleUrls: ['./table-temperature.component.css']
})
export class TableTemperatureComponent implements OnInit {

  temperatureData: any[] = [];  // Arreglo para almacenar los datos de temperatura
  date: string = '';  // Variable para almacenar la fecha seleccionada

  constructor(
    private tableTemperatureService: TableTemperatureService,
    private filterTemperaturaService: FilterTemperaturaService  // Inyectamos el servicio para filtrar por fecha
  ) { }

  ngOnInit(): void {
    // Obtener los datos sin filtrar al inicio (opcional)
    this.loadTemperatureData();
  }

  // Método para cargar los datos sin aplicar el filtro
  loadTemperatureData(): void {
    this.tableTemperatureService.getTemperatureById().subscribe(
      (response: any) => {
        this.temperatureData = response.data;  // Asignamos los datos a la variable 'temperatureData'
      },
      error => {
        console.error('Error al obtener los datos de temperatura', error);
      }
    );
  }

  // Método para filtrar los datos por fecha
  onFilterByDate(): void {
    if (this.date) {
      this.filterTemperaturaService.getTemperatureByDate(this.date).subscribe(
        (response: any) => {
          this.temperatureData = response.data;  // Asignamos los datos filtrados a la variable 'temperatureData'
        },
        error => {
          console.error('Error al obtener los datos por fecha', error);
        }
      );
    } else {
      console.error('Fecha no proporcionada');
      this.loadTemperatureData();  // Si no se proporciona fecha, cargamos todos los datos
    }
  }
}
