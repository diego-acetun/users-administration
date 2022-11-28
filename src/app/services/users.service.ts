import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, ignoreElements, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { user } from '../interfaces/user.interface';
import { login } from '../interfaces/login.interface';
import { AlertsService } from './alerts.service';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://crud-user.vercel.app/api/v1';
  public page = 11;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertsServices: AlertsService
  ) {}

  getUsers(): Observable<user[]> {
    return this.http
      .get<any>(`${this.url}/users?page=${this.page}&limit=50`)
      .pipe(
        map((users) => users.rows),
        tap((users) => console.log('getUsers', users)),
        catchError(this.handleError<any>('getUsuarios', []))
      );
  }

  getUser(id: string): Observable<user> {
    // console.log(`prueba ${this.url}/users/${id}`);
    return this.http.get<any>(`${this.url}/users/${id}`).pipe(
      tap((user) => {}),
      catchError(this.handleError<any>('getUsuario', []))
    );
  }

  createUser(user: user): Observable<user> {
    return this.http
      .post<user>(`${this.url}/users`, user, this.httpOptions)
      .pipe(
        tap(
          async (newUser: user) => {
            await this.alertsServices.presentAlert(
              'Create User',
              `User ${user.name}`,
              'Created succesfully'
            );
            this.router.navigate([`/users`]);
          }
          // this.toastr.success(`Se ha creado el user ${newUser.name}`)
        ),
        catchError(this.handleError<user>('createUserError'))
      );
  }

  updateUser(updatedUser: user) {
    return this.http
      .put<user>(
        `${this.url}/users/${updatedUser.id}`,
        updatedUser,
        this.httpOptions
      )
      .pipe(
        map((user) => user),
        tap(async (user) => {
          await this.alertsServices.presentAlert(
            'Update User',
            `User ${user.name}`,
            'updated succesfully'
          );
          this.router.navigate([`/users`]);
        }),
        catchError(this.handleError<any>('getusers', []))
      );
  }

  deleteUser(id: string): Observable<user> {
    return this.http.delete<user>(`${this.url}/users/${id}`).pipe(
      map((user) => user),
      tap(async (user) => {
        await this.alertsServices.presentAlert(
          'Delete User',
          `User ${user.name}`,
          'was deleted'
        );
        this.router.navigate([`/users`]);
      }),
      catchError(this.handleError<any>('deleteUser', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      if (operation === 'loginError') {
        console.log('credenciales incorrectas');
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
