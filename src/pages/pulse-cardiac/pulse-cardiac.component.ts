import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import Swal from 'sweetalert2'; // Importar SweetAlert2

@Component({
  selector: 'app-pulse-cardiac',
  templateUrl: './pulse-cardiac.component.html',
  styleUrls: ['./pulse-cardiac.component.css']
})
export class PulseCardiacComponent implements OnInit {
  ritme: number | null = null;
  status: string = 'Normal';
  hora: string = 'Cargando...';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // Escuchar mensajes de WebSocket
    this.websocketService.getMessages().subscribe((message) => {
      console.log("Mensaje recibido:", message); // Depuración: ver datos recibidos

      if (message && typeof message.bpm === 'number') {
        this.ritme = message.bpm;
        this.hora = new Date().toLocaleTimeString(); // Hora actual

        // Evaluar el estado basado en el ritmo cardíaco
        if (this.ritme != null && this.ritme < 60) {
          this.status = 'Bradicardia';
          
          // Alerta para bradicardia
          Swal.fire({
            title: '¡Atención!',
            text: `Tu ritmo cardíaco es bajo (Bradicardia): ${this.ritme} bpm. Por favor, consulta con un médico.`,
            icon: 'warning',
            confirmButtonText: 'OK'
          });

        } else if (this.ritme != null && this.ritme > 100) {
          this.status = 'Taquicardia';
          
          // Alerta para taquicardia
          Swal.fire({
            title: '¡Atención!',
            text: `Tu ritmo cardíaco es alto (Taquicardia): ${this.ritme} bpm. Por favor, consulta con un médico.`,
            icon: 'warning',
            confirmButtonText: 'OK'
          });

        } else {
          this.status = 'Normal';
        }
      } else {
        console.warn("Datos de ritmo cardíaco no recibidos o inválidos.");
        this.status = 'Esperando datos...'; // Si no hay ritmo cardíaco aún
      }
    });
  }
}
