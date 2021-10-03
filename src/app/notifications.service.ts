import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from './models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get('/assets/notifications.json')
      .toPromise()
      .then(r => <Notification[]>r);
  }
}
