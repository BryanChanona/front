import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';

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
        } else if (this.temperature != null && this.temperature > 37.5) {
          this.status = 'Fiebre';
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
