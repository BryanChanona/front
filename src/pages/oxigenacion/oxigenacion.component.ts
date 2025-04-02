import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-oxigenacion',
  templateUrl: './oxigenacion.component.html',
  styleUrls: ['./oxigenacion.component.css']
})
export class OxigenacionComponent implements OnInit {
  collapsed = true;
  profilePicUrl = 'https://img.icons8.com/?size=100&id=7rcs0z3sdioE&format=png&color=000000';
  actionsExpanded = false;
  oxigenacion: number = 0;
  status: string = '';
  hora: string = 'Cargando...';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // Escuchar mensajes de WebSocket para obtener la oxigenación
    this.websocketService.getMessages().subscribe((message) => {
      console.log("Mensaje recibido:", message); // Depuración: ver datos recibidos

      // Asegurarse de que el mensaje tenga la propiedad 'spo2' (oxigenación)
      if (message && message.spo2 !== undefined) {
        this.oxigenacion = message.spo2; // Cambiar 'oxigenacion' a 'spo2'
        this.hora = new Date().toLocaleTimeString(); // Hora actual

        // Evaluar el estado basado en la oxigenación (spo2)
        if (this.oxigenacion < 90) {
          this.status = 'Bajo';
          
          // Mostrar alerta con SweetAlert2 si la oxigenación es baja
          Swal.fire({
            title: '¡Atención!',
            text: 'La oxigenación está baja. Por favor, tome precauciones.',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        } else {
          this.status = 'Normal';
        }
      } else {
        this.status = 'Esperando datos...'; // Si no hay oxigenación aún
      }
    });
  }

  toggleSidenav() {
    this.collapsed = !this.collapsed;
  }

  toggleActions() {
    this.actionsExpanded = !this.actionsExpanded;
  }
}
