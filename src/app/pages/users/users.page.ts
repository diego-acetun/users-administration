import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users!: user[];
  reqData = false;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.verifySesion();
  }
  ionViewWillEnter() {
    this.verifySesion();
  }

  verifySesion() {
    // if (this.authService.verifySesion()) {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.reqData = true;
    });
    /* } else {
      this.router.navigate([`/login`]);
    } */
  }
}
