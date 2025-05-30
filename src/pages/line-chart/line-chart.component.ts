import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WebsocketService } from '../../app/services/websocket.service'; // Asegúrate de tener el servicio de WebSocket importado

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | undefined; // Usamos "private" y la inicializamos con undefined
  private bpmData: number[] = []; // Array para almacenar los datos del ritmo cardiaco
  private timeLabels: string[] = []; // Array para almacenar las etiquetas de tiempo
  private websocketSubscription: any; // Variable para almacenar la suscripción

  constructor(private websocketService: WebsocketService) {}

  ngAfterViewInit(): void {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;

    if (canvas) {
      // Crear la gráfica
      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.timeLabels, // Etiquetas de tiempo en el eje X
          datasets: [{
            label: 'Ritmo Cardiaco (bpm)',
            data: this.bpmData, // Datos del ritmo cardiaco
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });

      // Suscribirse a los mensajes de WebSocket para recibir los datos del ritmo cardiaco en tiempo real
      this.websocketSubscription = this.websocketService.getMessages().subscribe((message) => {
        if (message.bpm !== undefined) {
          // Obtener el nuevo ritmo cardiaco (bpm)
          const newBpm = message.bpm;
          const currentTime = new Date().toLocaleTimeString(); // Hora actual

          // Agregar el nuevo dato a la gráfica
          this.bpmData.push(newBpm); // Añadir el ritmo cardiaco al array
          this.timeLabels.push(currentTime); // Añadir la hora al array de etiquetas

          // Limitar el número de datos mostrados en la gráfica (opcional)
          if (this.bpmData.length > 10) {
            this.bpmData.shift(); // Eliminar el primer elemento
            this.timeLabels.shift(); // Eliminar la primera etiqueta de tiempo
          }

          // Actualizar la gráfica
          if (this.chart) {
            this.chart.update(); // Esto actualizará la gráfica con los nuevos datos
          }
        }
      });
    } else {
      console.error('No se encontró el canvas con id "chart"');
    }
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción cuando el componente se destruya
    if (this.websocketSubscription) {
      this.websocketSubscription.unsubscribe(); // Desuscribirse del WebSocket
    }

    if (this.chart) {
      this.chart.destroy(); // Destruir la gráfica para evitar errores de memoria
    }
  }
}
