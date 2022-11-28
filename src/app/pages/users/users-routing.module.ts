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
    path: 'user/:id',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserPageModule),
  },
  {
    path: 'create-user',
    loadChildren: () => import('./create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
