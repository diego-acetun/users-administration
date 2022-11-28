import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'users', url: '/users', icon: 'mail' },
    { title: 'Create User', url: '/users/create-user', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  ];
  public logOutDetails = { title: 'Logout', url: '/login', icon: 'trash' };
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuthenticated: boolean = false;
  pp!: string;
  constructor(private authService: AuthService) {
    this.authService.getAuth().subscribe((s) => (this.pp = s));
    // this.pp.subscribe((_) => {
    //   console.log('pp', _);
    // });
  }
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  ionViewWillEnter() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  logOut() {
    this.authService.logOut();
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
