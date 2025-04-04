import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AddSupervisorService {
  private apiUrl = 'http://localhost:8080/supervisors/';  // Cambia esta URL a la real

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para agregar supervisor
  agregarSupervisor(nombre: string, email: string, contrasena: string): Observable<void> {
    const token = this.authService.getToken(); // Obtener el token desde el servicio de autenticación

    if (!token) {
      throw new Error('No se encontró el token. Inicia sesión primero.');
    }

    const userId = this.authService.getUserId(); // Obtener el id_user desde el servicio de autenticación

    if (!userId) {
      throw new Error('No se encontró el id_user. Inicia sesión primero.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Asegúrate de enviar el token en los encabezados
      'Content-Type': 'application/json'
    });

    const body = {
      id_usuario: userId,  // Agregar el id_user al cuerpo de la solicitud
      name: nombre,
      email,
      password: contrasena
    };

    return this.http.post<void>(this.apiUrl, body, { headers });
  }
}
