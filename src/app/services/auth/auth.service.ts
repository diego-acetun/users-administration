import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, ignoreElements, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { user } from '../../interfaces/user.interface';
import { login } from '../../interfaces/login.interface';
// import { AlertController } from '@ionic/angular';
import { AlertsService } from '../alerts/alerts.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://crud-user.vercel.app/api/v1';
  public page = 1;
  private authSubject!: BehaviorSubject<user>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertsService: AlertsService
  ) {
    try {
      const session: user = JSON.parse(
        localStorage.getItem('user') ||
          `{name:'', image:'', email:'', id:'', birthday:''}`
      );
      this.authSubject = new BehaviorSubject<user>(session);
    } catch {
      const session: user = {
        name: '',
        image: '',
        email: '',
        id: '',
        birthday: '',
      };
      this.authSubject = new BehaviorSubject<user>(session);
    }
  }

  setAuth(auth: user) {
    localStorage.setItem('user', JSON.stringify(auth));
    // this.authSubject.next(JSON.stringify(auth));
    this.authSubject.next(auth);
  }
  getAuth() {
    // console.log('jj', typeof this.authSubject.value);
    return this.authSubject.asObservable();
  }

  isAuthenticated(): boolean {
    // * true si tiene sesion activa
    return localStorage.getItem('user') !== null;
  }

  logOut() {
    if (localStorage.getItem('user')) localStorage.removeItem('user');
    this.authSubject.next({
      name: '',
      image: '',
      email: '',
      id: '',
      birthday: '',
    });
  }
  login(credentials: login): Observable<user> {
    return this.http
      .post<user>(`${this.url}/login`, credentials, this.httpOptions)
      .pipe(
        tap((user) => {
          this.setAuth(user);
          this.router.navigate([`/users`]);
        }),
        catchError(this.handleError<any>('loginError', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      if (operation === 'loginError') {
        // console.log('credenciales incorrectas');
        // this.invalidCredentials();
        this.alertsService.presentAlert(
          'Login',
          'Credenciales incorrectas',
          'Intentar de nuevo'
        );
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
