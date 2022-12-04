import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  buttonDisabled: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // if (this.authService.verifySesion()) this.router.navigate([`/users`]);
  }

  click(): void {
    // console.log('user:', this.username, 'pass:', this.password);
    this.buttonDisabled = true;
    const credentials: login = {
      username: this.username,
      password: this.password,
    };
    this.authService.login(credentials).subscribe((user) => {
      this.buttonDisabled = false;
      // console.log('user prueba', user);
    });
  }
}
