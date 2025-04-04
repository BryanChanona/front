import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-bpm',
  templateUrl: './page-bpm.component.html',
  styleUrls: ['./page-bpm.component.css']
})
export class PageBpmComponent implements OnInit {
  ritme: number | null = null;
  status: string = 'Esperando datos...';
  hora: string = 'Cargando...';

  constructor(private websocketService: WebsocketService, private router: Router) {}

  ngOnInit() {
    this.websocketService.getMessages().subscribe((message) => {
      console.log("Mensaje recibido:", message); // Para depuración

      if (message && typeof message.bpm2 === 'number') {
        this.ritme = message.bpm2;
        this.hora = new Date().toLocaleTimeString();

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
        console.warn("Datos de bpm2 no válidos.");
        this.ritme = null;
        this.status = 'Esperando datos...';
      }
    });
  }

  cambiarMetodo() {
    this.router.navigate(['/pulse']);
  }
}
