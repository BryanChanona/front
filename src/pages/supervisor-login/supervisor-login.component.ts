import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
    constructor(private http: HttpClient, private router: Router) {}
  
    login() {
      const credentials = {
        email: this.email,
        password: this.password
      };
  
      this.http.post('http://localhost:8080/users/login', credentials).subscribe(
        (response) => {
          console.log('Usuario autenticado exitosamente', response);
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Iniciaste sesión correctamente.',
          }).then(() => {
            this.router.navigate(['/superviser']);
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
