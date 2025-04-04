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
  private apiUrl = 'http://localhost:8080/users/login'; // URL del backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guardar el token
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

  getUserName(): string | null {
    const token = this.getToken();
    if (!token) return null;
  
    try {
      const payload = this.decodeToken(token); // Decodificar el token y obtener el payload
      console.log('Payload dentro de getUserName:', payload); // Verificar qué contiene el payload
      return payload.user?.name;  // Acceder al 'name' dentro del objeto 'user'
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

  

  // Obtener el correo del usuario desde el token
  getUserEmail(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = this.decodeToken(token);
      return payload.email;  // Se asume que el correo del usuario está en el payload
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
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
