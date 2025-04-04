import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SRitmoService } from '../services/s-ritmo.service';

@Component({
  selector: 'app-s-ritmo',
  templateUrl: './s-ritmo.component.html',
  styleUrls: ['./s-ritmo.component.css']
})
export class SRitmoComponent implements OnInit {

  ritmoData: any[] = [];

  constructor(
    private ritmoService: SRitmoService,
    private cdr: ChangeDetectorRef // Forzar actualización de la vista
  ) {}

  ngOnInit(): void {
    this.getRitmo();
  }

  getRitmo(): void {
    this.ritmoService.getRitmo().subscribe(
      (response) => {
        console.log('Respuesta recibida:', response);

        if (response && Array.isArray(response.data)) {
          this.ritmoData = response.data;
        } else {
          console.error('Formato de respuesta incorrecto:', response);
          this.ritmoData = []; // Evita que la tabla falle
        }

        this.cdr.detectChanges(); // Forzar actualización de la vista
      },
      (error) => {
        console.error('Error al obtener los datos de ritmo:', error);
      }
    );
  }
}
