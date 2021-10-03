import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/Notification';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-user-notifications-list',
  templateUrl: './user-notifications-list.component.html',
  styleUrls: ['./user-notifications-list.component.scss']
})
export class UserNotificationsListComponent implements OnInit {
  notifications: Notification[] = [];


  constructor(
    private notificationsService: NotificationsService
  ) {

  }

  ngOnInit(): void {
    this.notificationsService.getNotifications()
      .then(s => this.notifications = s);
  }
}
