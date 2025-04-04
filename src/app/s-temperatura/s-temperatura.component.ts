import { Component, OnInit } from '@angular/core';
import { STemperatureService } from '../services/s-temperature.service';// Asegúrate de importar el servicio STemperatureService

@Component({
  selector: 'app-s-temperatura',
  templateUrl: './s-temperatura.component.html',
  styleUrls: ['./s-temperatura.component.css']
})
export class STemperaturaComponent implements OnInit {

  temperaturas: any[] = []; // Para almacenar las temperaturas obtenidas

  constructor(private temperatureService: STemperatureService) { }

  ngOnInit(): void {
    this.loadTemperatures();
  }

  // Método para cargar las temperaturas
  loadTemperatures(): void {
    this.temperatureService.getTemperatures().subscribe(
      (response) => {
        console.log('Datos de temperaturas recibidos:', response);
        this.temperaturas = response.data; // Aquí accedemos a 'data' de la respuesta
      },
      (error) => {
        console.error('Error al obtener las temperaturas:', error);
      }
    );
  }
}
