import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';// Importar el servicio
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Usuario autenticado exitosamente', response);
        
        // Guardar el token en el localStorage si el backend lo devuelve
        if (response.token) {
          localStorage.setItem('token', response.token);
        }

        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Iniciaste sesión correctamente.',
        }).then(() => {
          this.router.navigate(['/home']); // Redirige al usuario a la página de inicio
        });
      },
      (error) => {
        console.error('Error al autenticar el usuario', error);
        Swal.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrectos',
          text: 'Por favor, revisa tus credenciales.',
        });
      }
    );
  }
}
