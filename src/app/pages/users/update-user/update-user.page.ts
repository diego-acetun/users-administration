import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { FormUsersComponent } from 'src/app/components/form-users/form-users.component';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  @ViewChild(FormUsersComponent) form!: FormUsersComponent;
  user: user = {
    name: 'nameEdit',
    birthday: '1997-05-25',
    email: 'mail@mail',
    image: 'localhost',
    id: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private alertsService: AlertsService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
      this.form.form.patchValue(user);
    });
  }
  update() {
    if (this.form.form.invalid) {
      this.alertsService.presentAlert(
        'Invalid form',
        'Some fields have not been filled correctly',
        ''
      );
      return;
    }
    this.user.name = this.form.form.value.name;
    this.user.email = this.form.form.value.email;
    this.user.birthday = this.form.form.value.birthday;
    this.user.image = this.form.form.value.image;
    this.userService.updateUser(this.user).subscribe((user) => {});
  }
}
