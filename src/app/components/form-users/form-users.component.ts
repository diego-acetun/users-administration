import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { user } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss'],
})
export class FormUsersComponent implements OnInit {
  public form!: FormGroup;
  @Input() user: user = {
    name: '',
    birthday: '',
    email: '',
    id: '',
    image: '',
    password: '',
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.user.name],
      birthday: [this.user.birthday],
      email: [this.user.email],
      password: [this.user.password],
      image: [this.user.image],
    });
  }
}
