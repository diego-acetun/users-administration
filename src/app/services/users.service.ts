import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, ignoreElements, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { user } from '../interfaces/user.interface';
import { login } from '../interfaces/login.interface';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://crud-user.vercel.app/api/v1';
  public page = 1;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<user[]> {
    return this.http
      .get<any>(`${this.url}/users?page=${this.page}&limit=50`)
      .pipe(
        map((users) => users.rows),
        tap((_) => console.log('users', _)),
        catchError(this.handleError<any>('getUsuarios', []))
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
