import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class FilterTemperaturaService {
  
    private apiUrl = 'http://52.22.134.204:8081/temperature';  // Actualiza la base URL para obtener los datos de temperatura
  
    constructor(private http: HttpClient, private authService: AuthService) { }
  
    // Método para obtener los datos de temperatura por fecha
    getTemperatureByDate(date: string): Observable<any> {
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
