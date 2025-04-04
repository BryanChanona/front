import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pulse-cardiac',
  templateUrl: './pulse-cardiac.component.html',
  styleUrls: ['./pulse-cardiac.component.css']
})
export class PulseCardiacComponent implements OnInit {
  ritme: number | null = null;
  status: string = 'Esperando datos...';
  hora: string = 'Cargando...';

  constructor(private websocketService: WebsocketService, private router: Router) {}

  ngOnInit() {
    this.websocketService.getMessages().subscribe((message) => {
      console.log("Mensaje recibido:", message); // Depuración
      
      if (message && typeof message.bpm === 'number') {
        this.ritme = message.bpm;
        this.hora = new Date().toLocaleTimeString(); // Hora actual

        // Validar que `ritme` sea un número antes de evaluarlo
        if (this.ritme !== null) {
          if (this.ritme < 60) {
            this.status = 'Bradicardia';
          } else if (this.ritme > 100) {
            this.status = 'Taquicardia';
          } else {
            this.status = 'Normal';
          }
        }
      } else {
        console.warn("Datos de BPM no recibidos o inválidos.");
        this.ritme = null; // Asegurar que no haya un valor erróneo
        this.status = 'Esperando datos...';
      }
    });
  }
  cambiarMetodo(){
    this.router.navigate(['/pageBpm']);
  }
}



