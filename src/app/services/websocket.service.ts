import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: WebSocket;
  private subject: Subject<any>;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8082/ws'); 

    this.subject = new Subject();

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.subject.next(data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket cerrado');
    };
  }

  getMessages(): Observable<any> {
    return this.subject.asObservable();
  }
}
