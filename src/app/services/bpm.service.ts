import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class BpmService {
  private apiUrl = 'http://52.22.134.204:8081/customRhythm/'; // URL del backend para guardar BPM

  constructor(private http: HttpClient, private authService: AuthService) {}

  guardarBPM(mediaAlta: number, mediaBaja: number): Observable<any> {
    const token = this.authService.getToken(); // Obtener el token desde el servicio de autenticación

    if (!token) {
      throw new Error('No se encontró el token. Inicia sesión primero.');
    }

    const userId = this.authService.getUserId(); // Obtener el id_user desde el token

    if (!userId) {
      throw new Error('No se encontró el id_user. Inicia sesión primero.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Asegúrate de enviar el token en los encabezados
      'Content-Type': 'application/json'
    });

    const body = {
      id_user: userId,  // Agregar el id_user al cuerpo de la solicitud
      mediaAlta: mediaAlta.toString(),  // Asegúrate de enviar como string
      mediaBaja: mediaBaja.toString() 
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
