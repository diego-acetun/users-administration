import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
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
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    if (this.usersService.verifySesion()) this.router.navigate([`/users`]);
  }

  ionViewWillEnter() {
    if (this.usersService.verifySesion()) this.router.navigate([`/users`]);
  }

  click(): void {
    // console.log('user:', this.username, 'pass:', this.password);
    const credentials: login = {
      username: this.username,
      password: this.password,
    };
    this.usersService.login(credentials).subscribe((user) => {});
  }
}
