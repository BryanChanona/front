import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterSupervisorService {
  private registerUrl = 'http://localhost:8080/supervisors/';  // Cambia esta URL a tu API real
  
  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(name: string, email: string, contrasena: string, id_usuario: number): Observable<any> {
    const body = { name, email, password: contrasena, id_usuario };

    return this.http.post<any>(this.registerUrl, body).pipe(
      timeout(5000),  // Si la API no responde en 5 segundos, lanza un error
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'No se pudo registrar al usuario.';

        if (error.error && error.error.message) {
          errorMessage = error.error.message;  // Obtiene el mensaje de error del backend
        }

        console.error('Error en el registro:', error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
