import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginSuperviserService } from './login-superviser.service'; // Importa el servicio LoginSuperviserService
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class STemperatureService {

  private apiUrl = 'http://localhost:8081/temperature/temperatureByIdSupervisor'; // URL de la API sin parámetros

  constructor(private http: HttpClient, private loginService: LoginSuperviserService) { }

  // Método para obtener las mediciones de temperatura
  getTemperatures(): Observable<any> {
    const token = this.loginService.getToken(); // Obtener el token

    // Verificamos que el token esté disponible
    if (!token) {
      console.error('No se ha encontrado el token');
      return new Observable(); // Devuelve un observable vacío si no hay token
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`); // Agrega el token en las cabeceras

    console.log('Token utilizado:', token); // Verificar el token

    // Realizamos la solicitud a la URL sin ningún parámetro adicional
    return this.http.get<any>(this.apiUrl, { headers: headers }).pipe(
      tap(response => {
        console.log('Temperaturas obtenidas:', response); // Verificamos la respuesta
      })
    );
  }
}
