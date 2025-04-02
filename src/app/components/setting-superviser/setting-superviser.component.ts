import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-superviser',
  templateUrl: './setting-superviser.component.html',
  styleUrl: './setting-superviser.component.css'
})
export class SettingSuperviserComponent {
  seccionActiva: string = 'perfil';

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }

  guardarBPM() {
    alert('BPM guardado');
  }

  agregarSupervisor() {
    alert('Supervisor agregado');
  }
}
