import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormUsersComponent } from 'src/app/components/form-users/form-users.component';

@NgModule({
  declarations: [FormUsersComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [FormUsersComponent],
})
export class SharedModule {}
