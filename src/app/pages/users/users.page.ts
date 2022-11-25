import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
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
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.verifySesion();
  }
  ionViewWillEnter() {
    this.verifySesion();
  }

  verifySesion() {
    if (this.usersService.verifySesion()) {
      this.usersService.getUsers().subscribe((users) => {
        this.users = users;
        this.reqData = true;
      });
    } else {
      this.router.navigate([`/login`]);
    }
  }
}
