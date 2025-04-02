import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WebsocketService } from '../../app/services/websocket.service'; // Asegúrate de tener el servicio de WebSocket importado

@Component({
  selector: 'app-grafic-o',
  templateUrl: './grafic-o.component.html',
  styleUrls: ['./grafic-o.component.css']
})
export class GraficOComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | undefined; // Usamos "private" y la inicializamos con undefined
  private oxigenacionData: number[] = []; // Array para almacenar los niveles de oxigenación (spo2)
  private timeLabels: string[] = []; // Array para almacenar las etiquetas de tiempo (puedes usar la hora)
  private websocketSubscription: any; // Variable para almacenar la suscripción

  constructor(private websocketService: WebsocketService) {}

  ngAfterViewInit(): void {
    const canvas = document.getElementById('chartss') as HTMLCanvasElement;

    if (canvas) {
      // Crear la gráfica
      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.timeLabels, // Etiquetas de tiempo en el eje X
          datasets: [{
            label: 'Oxigenación (spo2)', // Label actualizado
            data: this.oxigenacionData, // Datos de oxigenación (spo2)
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });

      // Suscribirse a los mensajes de WebSocket para recibir el nivel de oxigenación (spo2) en tiempo real
      this.websocketSubscription = this.websocketService.getMessages().subscribe((message) => {
        if (message.spo2 !== undefined) {
          // Obtener el nuevo nivel de oxigenación (spo2)
          const newOxigenacion = message.spo2;
          const currentTime = new Date().toLocaleTimeString(); // Hora actual

          // Agregar el nuevo dato a la gráfica
          this.oxigenacionData.push(newOxigenacion); // Añadir la oxigenación al array
          this.timeLabels.push(currentTime); // Añadir la hora al array de etiquetas

          // Limitar el número de datos mostrados en la gráfica (opcional)
          if (this.oxigenacionData.length > 10) {
            this.oxigenacionData.shift(); // Eliminar el primer elemento para mantener la gráfica con solo 10 puntos
            this.timeLabels.shift(); // Eliminar la primera etiqueta de tiempo
          }

          // Actualizar la gráfica
          if (this.chart) {
            this.chart.update(); // Esto actualizará la gráfica con los nuevos datos
          }
        }
      });
    } else {
      console.error('No se encontró el canvas con id "chartss"');
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
