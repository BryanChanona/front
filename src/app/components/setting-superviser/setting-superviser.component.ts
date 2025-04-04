import { Component, OnInit } from '@angular/core';
import { LoginSuperviserService, Supervisor } from '../../services/login-superviser.service';

@Component({
  selector: 'app-setting-superviser',
  templateUrl: './setting-superviser.component.html',
  styleUrl: './setting-superviser.component.css'
})
export class SettingSuperviserComponent implements OnInit {
  seccionActiva: string = 'perfil';
  supervisor: Supervisor | null = null;

  constructor(private loginService: LoginSuperviserService) {}

  ngOnInit(): void {
    this.loginService.getSupervisor().subscribe((data) => {
      console.log('Supervisor autenticado:', data);
      this.supervisor = data;
    });
  }

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
