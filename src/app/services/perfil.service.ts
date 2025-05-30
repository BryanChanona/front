import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiUrl = 'http://54.211.128.115:8080/users'; // URL base del backend

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener el nombre y email del usuario por id_user
  getUserProfile(): Observable<any> {
    const userId = this.authService.getUserId();
    if (!userId) {
      throw new Error("No se pudo obtener el ID del usuario.");
    }
    return this.http.get<any>(`${this.apiUrl}/${userId}`); // 🔥 Hacer la petición al backend
  }
}
