import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true;
    if (state.url === '/users') {
      if(!this.authService.isAuthenticated()) this.router.navigate(['/login'])
      return localStorage.getItem('user') !== null;
    }
    if (state.url === '/login') {
      // console.log('entra');
      if (this.authService.isAuthenticated()) this.router.navigate(['/users']);
      return localStorage.getItem('user') === null;
    }

    return true;
  }
}
