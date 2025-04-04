import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private temperatureData: number[] = [];
  private timeLabels: string[] = [];

  constructor() {
    // Si ya existe algún dato en el almacenamiento local, lo recuperamos
    const storedData = localStorage.getItem('temperatureData');
    const storedLabels = localStorage.getItem('timeLabels');
    if (storedData && storedLabels) {
      this.temperatureData = JSON.parse(storedData);
      this.timeLabels = JSON.parse(storedLabels);
    }
  }

  // Obtener los datos de temperatura
  getTemperatureData(): number[] {
    return this.temperatureData;
  }

  // Obtener las etiquetas de tiempo
  getTimeLabels(): string[] {
    return this.timeLabels;
  }

  // Añadir nuevo dato
  addTemperatureData(newTemperature: number, currentTime: string): void {
    this.temperatureData.push(newTemperature);
    this.timeLabels.push(currentTime);

    // Guardamos los datos en el almacenamiento local para persistencia
    localStorage.setItem('temperatureData', JSON.stringify(this.temperatureData));
    localStorage.setItem('timeLabels', JSON.stringify(this.timeLabels));
  }

  // Limitar el número de datos
  limitData(): void {
    if (this.temperatureData.length > 10) {
      this.temperatureData.shift();
      this.timeLabels.shift();
    }

    // Guardamos los datos actualizados
    localStorage.setItem('temperatureData', JSON.stringify(this.temperatureData));
    localStorage.setItem('timeLabels', JSON.stringify(this.timeLabels));
  }
}
