import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterSupervisorService } from '../../app/services/register-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-supervisor',
  templateUrl: './register-supervisor.component.html',
  styleUrl: './register-supervisor.component.css'
})
export class RegisterSupervisorComponent {
  nombre: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    id_usuario: number = 0; // Inicializa id_device si es necesario
  
    constructor(private registerSupervisorService: RegisterSupervisorService, private router: Router) {}
  
    register() {
      if (this.password !== this.confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          text: 'Por favor, revisa las contraseñas.',
        });
        return;
      }
  
      // Validaciones adicionales antes de hacer la solicitud
      if (!this.email || !this.nombre || !this.password || !this.id_usuario) {
        Swal.fire({
          icon: 'error',
          title: 'Campos incompletos',
          text: 'Por favor, llena todos los campos antes de continuar.',
        });
        return;
      }
  
      this.registerSupervisorService.register(this.nombre, this.email, this.password, this.id_usuario).subscribe(
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
            text: error?.message || 'Hubo un error al intentar registrar el usuario. Intenta nuevamente.',
          });
        }
      );
    }
}
