import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { login } from 'src/app/interfaces/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('locla', localStorage.getItem('user'));
    // if (this.authService.verifySesion()) this.router.navigate([`/users`]);
  }

  ionViewWillEnter() {
    // if (this.authService.verifySesion()) this.router.navigate([`/users`]);
  }

  click(): void {
    // console.log('user:', this.username, 'pass:', this.password);
    const credentials: login = {
      username: this.username,
      password: this.password,
    };
    this.authService.login(credentials).subscribe((user) => {});
  }
}
