import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'users', url: '/users', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  ];
  public logOutDetails = { title: 'Logout', url: '/login', icon: 'trash' };

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private usersService: UsersService) {}

  logOut() {
    this.usersService.logOut();
    // console.log('clicked');
  }
}
