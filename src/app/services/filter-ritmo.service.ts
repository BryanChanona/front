import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Asegúrate de importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class FilterRitmoService {

  private apiUrl = 'http://52.22.134.204:8081/heartRate';  // Base URL de la API

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener los datos de ritmo cardiaco por fecha
  getHeartRateByDate(date: string): Observable<any> {
    const token = this.authService.getToken();  // Obtener el token desde el servicio de autenticación

    if (!token) {
      throw new Error('Token no encontrado');
    }

    // Crear los encabezados y agregar el token al encabezado 'Authorization'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Hacer la solicitud GET con el parámetro 'date' incluido en la URL
    return this.http.get(`${this.apiUrl}/${date}`, { headers });
  }
}
