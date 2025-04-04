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

  login(email: string, password: string): Observable<Supervisor> {
    return this.http.post<{ supervisor: Supervisor; token: string }>(this.apiUrl, { email, password }).pipe(
      map((response) => response.supervisor), // Extrae solo el objeto supervisor
      tap((supervisor) => {
        console.log('Supervisor guardado:', supervisor);
        localStorage.setItem('supervisor', JSON.stringify(supervisor));
        this.supervisorSubject.next(supervisor);
      })
    );
  }

  getSupervisor(): Observable<Supervisor | null> {
    return this.supervisor$;
  }

  getSupervisorId(): number | null {
    const supervisor = this.getStoredSupervisor();
    return supervisor ? supervisor.id_supervisor : null;
  }

  getUserId(): number | null {
    const supervisor = this.getStoredSupervisor();
    return supervisor ? supervisor.id_user : null;
  }

  private getStoredSupervisor(): Supervisor | null {
    const supervisorData = localStorage.getItem('supervisor');
    return supervisorData ? JSON.parse(supervisorData) : null;
  }
}
