import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id_usuario: number;
  name: string;
  email: string;
  premium: boolean;
  id_device: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://54.211.128.115:8080/users/login'; // URL del backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token guardado en localStorage:', response.token);
        }

        if (response.user?.name) {
          localStorage.setItem('name', response.user.name);
          console.log('Nombre guardado en localStorage:', response.user.name);
        }

        if (response.user?.email) {
          localStorage.setItem('email', response.user.email);
          console.log('Correo guardado en localStorage:', response.user.email);
        }
      })
    );
  }
  logout(): void {
    localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Obtener el token almacenado
  }

  getUserName(): string | null {
    return localStorage.getItem('name');
  }
  
  // Obtener email desde localStorage
  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }

  // Obtener el id_user desde el token
  getUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = this.decodeToken(token);
      return payload.id_user;  // Se asume que el id_user está en el payload del token
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

 
  getUser(): Observable<User | null> {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;
    return new Observable(observer => {
      observer.next(user);
      observer.complete();
    });
  }

  updateUserPremiumStatus(premium: boolean): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      let user = JSON.parse(userData);
      user.premium = premium; // Actualizar el estado premium
      localStorage.setItem('user', JSON.stringify(user)); // Guardar en localStorage
    }
  }


  // Decodificar el JWT y extraer su payload
  private decodeToken(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Token JWT no válido');
    }
    const payload = atob(parts[1]); // Decodificar el payload del JWT
    console.log('Payload decodificado:', payload); // Imprimir el payload decodificado
    return JSON.parse(payload); // Parsear el payload a un objeto JSON
  }
  
  
  

}
