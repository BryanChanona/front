import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  private apiUrl = 'http://54.211.128.115:8080/users/updateStatus'; 

  constructor(private http: HttpClient, private authService: AuthService) { }

  updatePremiumStatus(premium: boolean): Observable<any> {
    const token = this.authService.getToken(); 
    if (!token) {
      throw new Error('Token no encontrado');
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { premium: premium };
  
    return this.http.put<any>(this.apiUrl,body, { headers });
  }
  
}
