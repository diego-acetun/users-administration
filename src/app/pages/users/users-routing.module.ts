import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
// import { AuthGuard } from 'src/app/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: ':id',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
