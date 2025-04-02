import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import { UserService } from '../../app/services/user.service';
import Swal from 'sweetalert2'; // Importar SweetAlert2

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent implements OnInit {
  userId: number | null = null;
  nombre: string = 'Cargando...';
  temperature: number | null = null;
  status: string = 'Normal';
  hora: string = 'Cargando...';

  constructor(
    private websocketService: WebsocketService,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Obtener el usuario autenticado
    this.userService.getUser().subscribe(user => {
      this.userId = user.id_usuario;
      this.nombre = user.name; // Asignar el nombre del usuario

      // Escuchar mensajes de WebSocket
      this.websocketService.getMessages().subscribe((message) => {
        if (message.id_user === this.userId) {
          this.temperature = message.temperatura;
          this.hora = new Date().toLocaleTimeString(); // Hora actual

          // Evaluar el estado basado en la temperatura
          if (this.temperature !== null) { // Solo entra si temperature tiene un valor
            if (this.temperature < 36) {
              this.status = 'Hipotermia';
              
              // Alerta para hipotermia
              Swal.fire({
                title: '¡Atención!',
                text: `Tu temperatura es baja (Hipotermia): ${this.temperature}°C. Por favor, toma medidas para calentar tu cuerpo.`,
                icon: 'warning',
                confirmButtonText: 'OK'
              });

            } else if (this.temperature > 37.5) {
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
            this.status = 'Esperando datos...'; // Si no hay temperatura aún
          }
          
        }
      });
    });
  }
}
