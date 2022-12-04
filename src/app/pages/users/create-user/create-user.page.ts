import { Component, OnInit, ViewChild } from '@angular/core';
import { FormUsersComponent } from 'src/app/components/form-users/form-users.component';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  @ViewChild(FormUsersComponent) form!: FormUsersComponent;
  newUser!: user;
  constructor(
    private usersService: UsersService,
    private alertsService: AlertsService
  ) {}

  ngOnInit() {}

  createUser() {
    if (this.form.form.invalid) {
      this.alertsService.presentAlert(
        'Invalid form',
        'Some fields have not been filled correctly',
        ''
      );
      return;
    }
    this.newUser = this.form.form.value;
    // console.log('new user', this.newUser);
    this.usersService.createUser(this.newUser).subscribe((newUser) => {});
  }
}
