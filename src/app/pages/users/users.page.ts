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
  users: user[] = [
    {
      id: '',
      name: '',
      birthday: '',
      email: '',
      image: '',
    },
  ];
  reqData = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    console.log("init");
    this.getUsers();
  }
  // ionViewWillEnter() {
  //   console.log("will enter");
  //   this.getUsers();
  // }

  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      // console.log("djejdejen");
      this.users = users;
      this.reqData = true;
    });
  }
}
