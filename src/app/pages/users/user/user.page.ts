import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  // user: user = {
  //   name: '',
  //   email: '',
  //   image: '',
  //   id: '',
  //   birthday: '',
  // };
  user!: user;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    // console.log('id:', id);
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
}
