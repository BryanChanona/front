import { Component, OnInit } from '@angular/core';
import { RitmeService } from '../../app/services/ritme.service';

@Component({
  selector: 'app-page-r',
  templateUrl: './page-r.component.html',
  styleUrl: './page-r.component.css'
})
export class PageRComponent implements OnInit{
  nombre: string = '';
  ritmoCardiaco: number = 0;
  status: number = 0;
  hora: string = '';

  constructor(private RitmeService: RitmeService) {}

  ngOnInit(): void {
    this.RitmeService.getDatos().subscribe(
      (data) => {
        this.nombre = data.nombre;
        this.ritmoCardiaco = data.ritmo_cardiaco;
        this.status = data.status;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );

    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000 * 60);
  }

  actualizarHora(): void {
    const now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();

    const horasStr = horas < 10 ? `0${horas}` : `${horas}`;
    const minutosStr = minutos < 10 ? `0${minutos}` : `${minutos}`;

    this.hora = `${horasStr}:${minutosStr}`;
  }
}
