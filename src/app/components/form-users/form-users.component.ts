import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/interfaces/user.interface';
import { Validations } from 'src/app/pages/users/validations/Validations';
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
  @Input() showInputPassword: boolean = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      birthday: [this.user.birthday, [Validators.required]],
      email: [
        this.user.email,
        [Validators.required, Validators.email, Validations.validateEndDotCom],
      ],
      password: [
        this.user.password,
        [
          this.showInputPassword
            ? Validators.required
            : Validators.nullValidator,
          this.showInputPassword
            ? Validators.minLength(6)
            : Validators.nullValidator,
          this.showInputPassword
            ? Validations.validateSpecialCharacters
            : Validators.nullValidator,
          this.showInputPassword
            ? Validations.validateSpecialCharacters
            : Validators.nullValidator,
        ],
      ],
      image: [this.user.image, [Validators.required]],
    });
  }
}
