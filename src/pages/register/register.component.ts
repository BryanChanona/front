import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Importar SweetAlert2

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        text: 'Por favor, revisa las contraseñas.',
      });
      return;
    }

    const user = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      name: this.email.split('@')[0], // Se puede usar el correo para el nombre
    };

    this.http.post('http://localhost:8080/users', user).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'El usuario ha sido registrado exitosamente.',
        }).then(() => {
          this.router.navigate(['/login']); // Redirige al usuario a la página de login
        });
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
        Swal.fire({
          icon: 'error',
          title: 'Usuario no creado',
          text: 'Hubo un error al intentar registrar el usuario. Intenta nuevamente.',
        });
      }
    );
  }
}
