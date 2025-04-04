import { Component } from '@angular/core';
import { LoginSuperviserService } from '../../app/services/login-superviser.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supervisor-login',
  templateUrl: './supervisor-login.component.html',
  styleUrl: './supervisor-login.component.css'
})
export class SupervisorLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginSuperviserService, private router: Router) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Usuario autenticado exitosamente', response);
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Iniciaste sesión correctamente.',
        }).then(() => {
          this.router.navigate(['/homeSuperviser']);
        });
      },
      (error) => {
        console.error('Error al autenticar el usuario', error);
        Swal.fire({
          icon: 'error',
          title: 'Correo o contraseña incorrectos',
          text: 'Por favor, revisa tus credenciales.',
        });
      }
    );
  }
}
