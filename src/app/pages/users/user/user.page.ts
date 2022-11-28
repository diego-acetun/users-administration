import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user!: user;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getUser();
  }

  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
  update() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.router.navigate([`users/update-user/${id}`]);
  }

  delete() {
    // console.log('eliminando');
    this.userService.deleteUser(this.user.id).subscribe((user) => {});
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            // this.handlerMessage = 'Alert confirmed';
            this.delete();
          },
        },
      ],
    });

    await alert.present();
  }
}
