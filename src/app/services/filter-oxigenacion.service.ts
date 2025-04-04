import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class FilterOxigenacionService {

  private apiUrl = 'http://localhost:8081/oxygen';  // URL base de la API para oxigenación

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener los datos de oxigenación por fecha
  getOxygenByDate(date: string): Observable<any> {
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
