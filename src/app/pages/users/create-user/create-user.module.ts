import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserPageRoutingModule } from './create-user-routing.module';
// import { ReactiveFormsModule } from '@angular/forms';

import { CreateUserPage } from './create-user.page';
// import { FormUsersComponent } from 'src/app/components/form-users/form-users.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUserPageRoutingModule,
    // ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateUserPage],
})
export class CreateUserPageModule {}
