import { Component, OnInit, ViewChild } from '@angular/core';
import { FormUsersComponent } from 'src/app/components/form-users/form-users.component';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  @ViewChild(FormUsersComponent) form!: FormUsersComponent;
  newUser!: user;
  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  createUser() {
    this.newUser = this.form.form.value;
    console.log('new user', this.newUser);
    this.usersService.createUser(this.newUser).subscribe((newUser) => {});
  }
}
