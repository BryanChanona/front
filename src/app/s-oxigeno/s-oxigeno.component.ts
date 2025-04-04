import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SOxigenoService } from '../services/s-oxigeno.service';

@Component({
  selector: 'app-s-oxigeno',
  templateUrl: './s-oxigeno.component.html',
  styleUrls: ['./s-oxigeno.component.css']
})
export class SOxigenoComponent implements OnInit {

  oxigenoData: any[] = [];

  constructor(
    private oxigenoService: SOxigenoService,
    private cdr: ChangeDetectorRef // Forzar actualización de la vista
  ) {}

  ngOnInit(): void {
    this.getOxigeno();
  }

  getOxigeno(): void {
    this.oxigenoService.getOxigeno().subscribe(
      (response) => {
        console.log('Respuesta recibida:', response);

        if (response && Array.isArray(response.data)) {
          this.oxigenoData = response.data;
        } else {
          console.error('Formato de respuesta incorrecto:', response);
          this.oxigenoData = []; // Evita que la tabla falle
        }

        this.cdr.detectChanges(); // Forzar actualización de la vista
      },
      (error) => {
        console.error('Error al obtener los datos de oxigenación:', error);
      }
    );
  }
}
