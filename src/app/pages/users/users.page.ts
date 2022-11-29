import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
import { AlertsService } from 'src/app/services/alerts.service';
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
  constructor(
    private usersService: UsersService,
    private alertsSerice: AlertsService
  ) {}

  ngOnInit() {
    this.getUsers();
  }
  ionViewWillEnter() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      // console.log("djejdejen");
      this.users = users;
      this.reqData = true;
    });
  }

  beforePage() {
    if (this.usersService.getPage() <= 1) {
      this.alertsSerice.presentToast('top', 'You are on page 1');
      return;
    }
    this.usersService.setPage('-');
    this.getUsers();
  }
  nextPage() {
    this.usersService.setPage('+');
    this.getUsers();
  }
}
