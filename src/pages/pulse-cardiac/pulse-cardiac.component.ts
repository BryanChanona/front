import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import { UserService } from '../../app/services/user.service';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import { Router } from '@angular/router';


@Component({
  selector: 'app-pulse-cardiac',
  templateUrl: './pulse-cardiac.component.html',
  styleUrls: ['./pulse-cardiac.component.css']
})
export class PulseCardiacComponent implements OnInit {
  userId: number | null = null;
  ritme: number | null = null;
  status: string = 'Normal';
  hora: string = 'Cargando...';

  constructor(
    private websocketService: WebsocketService,
    private userService: UserService,
    private router: Router // Agregar el Router
  ) {}

  ngOnInit() {
    // Obtener el usuario autenticado
    this.userService.getUser().subscribe(user => {
      this.userId = user.id_usuario;

      // Escuchar mensajes de WebSocket
      this.websocketService.getMessages().subscribe((message) => {
        if (message.id_user === this.userId) {
          this.ritme = message.bpm;
          this.hora = new Date().toLocaleTimeString(); // Hora actual

          // Evaluar el estado basado en el ritmo cardíaco
          if (this.ritme !== null) {
            if (this.ritme < 60) {
              this.status = 'Bradicardia';
              
              // Alerta para bradicardia
              Swal.fire({
                title: '¡Atención!',
                text: `Tu ritmo cardíaco es bajo (Bradicardia): ${this.ritme} bpm. Por favor, consulta con un médico.`,
                icon: 'warning',
                confirmButtonText: 'OK'
              });

            } else if (this.ritme > 100) {
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
            this.status = 'Esperando datos...';
          }
        }
      });
    });
  }

  cambiarMetodo() {
    this.router.navigate(['/pageBpm']); // Cambia '/otra-pagina' por la ruta a la que deseas redirigir
  }
}
