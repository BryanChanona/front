import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WebsocketService } from '../../app/services/websocket.service'; // Asegúrate de tener el servicio de WebSocket importado

@Component({
  selector: 'app-grafic-t',
  templateUrl: './grafic-t.component.html',
  styleUrls: ['./grafic-t.component.css']
})
export class GraficTComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | undefined; // Usamos "private" y la inicializamos con undefined
  private temperatureData: number[] = []; // Array para almacenar las temperaturas
  private timeLabels: string[] = []; // Array para almacenar las etiquetas de tiempo (puedes usar la hora)

  constructor(private websocketService: WebsocketService) {}

  ngAfterViewInit(): void {
    const canvas = document.getElementById('charts') as HTMLCanvasElement;

    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.timeLabels, // Etiquetas de tiempo en el eje X
          datasets: [{
            label: 'Temperatura',
            data: this.temperatureData, // Datos de temperatura
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });

      // Suscribirse a los mensajes de WebSocket para recibir la temperatura en tiempo real
      this.websocketService.getMessages().subscribe((message) => {
        if (message.temperatura !== undefined) {
          // Obtener la nueva temperatura
          const newTemperature = message.temperatura;
          const currentTime = new Date().toLocaleTimeString(); // Hora actual

          // Agregar el nuevo dato a la gráfica
          this.temperatureData.push(newTemperature); // Añadir la temperatura al array
          this.timeLabels.push(currentTime); // Añadir la hora al array de etiquetas

          // Limitar el número de datos mostrados en la gráfica (opcional)
          if (this.temperatureData.length > 10) {
            this.temperatureData.shift(); // Eliminar el primer elemento para mantener la gráfica con solo 10 puntos
            this.timeLabels.shift(); // Eliminar la primera etiqueta de tiempo
          }

          // Actualizar la gráfica
          if (this.chart) {
            this.chart.update(); // Esto actualizará la gráfica con los nuevos datos
          }
        }
      });
    } else {
      console.error('No se encontró el canvas con id "charts"');
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Destruimos la gráfica para evitar errores de memoria
    }
  }
}
