import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body-settings',
  templateUrl: './body-settings.component.html',
  styleUrl: './body-settings.component.css'
})
export class BodySettingsComponent {

  seccionActiva: string = 'perfil';

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }

  guardarBPM() {
    Swal.fire({
      icon: 'success',
      title: '¡Guardado!',
      text: 'BPM guardado correctamente.',
      confirmButtonText: 'OK'
    });
  }

  agregarSupervisor() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Supervisor agregado correctamente.',
      confirmButtonText: 'OK'
    });
  }

  confirmarSalida() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres salir de la aplicación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/'; 
      }
    });
  }
}
