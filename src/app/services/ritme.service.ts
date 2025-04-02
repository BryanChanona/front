import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RitmeService {
  private apiUrl = 'https://api.ejemplo.com/datos'; // Reemplaza con tu URL real

  constructor(private http: HttpClient) {}

  getDatos(): Observable<{ nombre: string, ritmo_cardiaco: number, status: number }> {
    return this.http.get<{ nombre: string, ritmo_cardiaco: number, status: number }>(this.apiUrl).pipe(
      timeout(5000), // Si la API no responde en 5s, lanza un error
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(() => new Error('No se pudieron obtener los datos'));
      })
    );
  }
}
