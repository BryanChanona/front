import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Asegúrate de importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class TableOxigenacionService {

  private apiUrl = 'http://localhost:8081/oxygen/oxygenById'; 

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener los datos de oxigenación utilizando el token
  getOxigenationById(): Observable<any> {
    const token = this.authService.getToken();  // Obtener el token desde el servicio de autenticación

    if (!token) {
      throw new Error('Token no encontrado');
    }

    // Crear los encabezados y agregar el token al encabezado 'Authorization'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Hacer la solicitud GET con los encabezados adecuados
    return this.http.get(this.apiUrl, { headers });
  }

  getSupervisor(): Observable<any> {
    const token = this.authService.getToken(); 

    if (!token) {
      throw new Error('Token no encontrado');
    }

    const userId = this.authService.getUserId(); // Llamada correcta a la función

    if (!userId) {
      throw new Error('User ID no encontrado');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`http://localhost:8081/supervisors/${userId}`, { headers });
}
}
