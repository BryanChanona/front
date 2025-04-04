import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';  // Importa Swal para mostrar mensajes

interface User {
  id_usuario: number;
  name: string;
  email: string;
  premium: boolean;
  id_device: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users/login'; // Ruta para obtener el perfil del usuario

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl).pipe(
      catchError(this.handleError) // Agregar manejo de errores
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Errores del cliente o red
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      // Errores del backend
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }
    
    // Mostrar un mensaje de error con SweetAlert
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: errorMessage,
      confirmButtonText: 'OK'
    });

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
