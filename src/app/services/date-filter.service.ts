import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginSuperviserService } from './login-superviser.service';

@Injectable({
  providedIn: 'root'
})
export class DateFilterService {
  private selectedDateSubject = new BehaviorSubject<string>('');  
  selectedDate$ = this.selectedDateSubject.asObservable();

  private apiUrl = 'http://localhost:8081/heartRate';

  constructor(private http: HttpClient, private loginSuperviserService: LoginSuperviserService) {}

  /**
   * Obtiene el ID del usuario desde el supervisor logueado.
   */
  private getUserId(): number | null {
    return this.loginSuperviserService.getUserId();
  }

  /**
   * Obtiene el ID del supervisor.
   */
  private getSupervisorId(): number | null {
    return this.loginSuperviserService.getSupervisorId();
  }

  /**
   * Establece la fecha seleccionada.
   */
  setSelectedDate(date: string): void {
    this.selectedDateSubject.next(date);
  }

  /**
   * Obtiene todos los registros de monitores del usuario supervisado.
   */
  getMonitorDataByDate(date: string): Observable<any> {
    const userId = this.getUserId();
    const supervisorId = this.getSupervisorId();

    if (!userId || !supervisorId) {
      throw new Error('ID de usuario o supervisor no disponible');
    }

    return this.http.get<any>(`${this.apiUrl}/${supervisorId}/${userId}/${date}`);
  }
}
