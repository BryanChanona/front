import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface Supervisor {
  id_supervisor: number;
  id_user: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginSuperviserService {
  private apiUrl = 'http://localhost:8080/supervisors/login';
  private supervisorSubject = new BehaviorSubject<Supervisor | null>(this.getStoredSupervisor());
  supervisor$ = this.supervisorSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Iniciar sesión y guardar supervisor y token
  login(email: string, password: string): Observable<Supervisor> {
    return this.http.post<{ supervisor: Supervisor; token: string }>(this.apiUrl, { email, password }).pipe(
      tap((response) => {
        console.log('Token recibido:', response.token);
        console.log('Supervisor guardado:', response.supervisor);
        localStorage.setItem('supervisor', JSON.stringify(response.supervisor));
        localStorage.setItem('token', response.token);
        this.supervisorSubject.next(response.supervisor);
      }),
      map((response) => response.supervisor)
    );
  }

  // Obtener el observable del supervisor
  getSupervisor(): Observable<Supervisor | null> {
    return this.supervisor$;
  }

  // Obtener ID del supervisor
  getSupervisorId(): number | null {
    const supervisor = this.getStoredSupervisor();
    return supervisor ? supervisor.id_supervisor : null;
  }

  // Obtener ID del usuario
  getUserId(): number | null {
    const supervisor = this.getStoredSupervisor();
    return supervisor ? supervisor.id_user : null;
  }

  // Obtener token desde localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('supervisor');
    localStorage.removeItem('token');
    this.supervisorSubject.next(null);
  }

  // Recuperar supervisor desde localStorage
  private getStoredSupervisor(): Supervisor | null {
    const supervisorData = localStorage.getItem('supervisor');
    return supervisorData ? JSON.parse(supervisorData) : null;
  }
}
