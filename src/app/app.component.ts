import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { user } from './interfaces/user.interface';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: user;
  public appPages = [
    { title: 'users', url: '/users', icon: 'person-outline' },
    {
      title: 'Create User',
      url: '/users/create-user',
      icon: 'person-add-outline',
    },
  ];
  public logOutDetails = {
    title: 'Logout',
    url: '/login',
    icon: 'log-out-outline',
  };
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.getAuth().subscribe((user) => {
      this.isAuthenticated = user.name !== '';
      this.user = user;
    });
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
