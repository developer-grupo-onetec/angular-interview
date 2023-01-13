import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError, Observable, of, tap} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://randomuser.me/api/';
  private usersLimit = 'results=10'
  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get<any[]>(`${this.usersUrl}?${ this.usersLimit }`)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<any[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
