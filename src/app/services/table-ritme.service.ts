import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Asegúrate de importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class TableRitmeService {

  private apiUrl = 'http://localhost:8081/heartRate/heartRateById'; // La URL de la API

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener los datos utilizando el token
  getHeartRatesById(): Observable<any> {
    const token = this.authService.getToken();  // Obtener el token desde el servicio de autenticación

    if (!token) {
      throw new Error('Token no encontrado');
    }

    // Crear los encabezados y agregar el token al encabezado 'Authorization'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Hacer la solicitud GET con los encabezados adecuados
    return this.http.get(this.apiUrl, { headers });
  }
}
