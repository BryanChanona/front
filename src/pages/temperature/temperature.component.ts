import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import Swal from 'sweetalert2'; // Importar SweetAlert2

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temperature: number | null = null;
  status: string = 'Normal';
  hora: string = 'Cargando...';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // Escuchar mensajes de WebSocket
    this.websocketService.getMessages().subscribe((message) => {
      console.log("Mensaje recibido:", message); // Depuración: ver datos recibidos
      
      if (message && typeof message.temperatura === 'number') {
        this.temperature = message.temperatura;
        this.hora = new Date().toLocaleTimeString(); // Hora actual

        // Evaluar el estado basado en la temperatura
        if (this.temperature != null && this.temperature < 36) {
          this.status = 'Hipotermia';
          
          // Alerta para hipotermia
          Swal.fire({
            title: '¡Atención!',
            text: `Tu temperatura es baja (Hipotermia): ${this.temperature}°C. Por favor, toma medidas para calentar tu cuerpo.`,
            icon: 'warning',
            confirmButtonText: 'OK'
          });

        } else if (this.temperature != null && this.temperature > 37.5) {
          this.status = 'Fiebre';
          
          // Alerta para fiebre
          Swal.fire({
            title: '¡Atención!',
            text: `Tu temperatura es alta (Fiebre): ${this.temperature}°C. Por favor, consulta a un médico.`,
            icon: 'warning',
            confirmButtonText: 'OK'
          });

        } else {
          this.status = 'Normal';
        }
      } else {
        console.warn("Datos de temperatura no recibidos o inválidos.");
        this.status = 'Esperando datos...'; // Si no hay temperatura aún
      }
    });
  }
}
