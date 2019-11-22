import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Disco } from '../models/disco';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'http://localhost:8100/discos';

  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Si en el cliente o red pasa algo lo maneja....
      console.error('An error occurred:', error.error.message);
    } else {
      // El backend devuelve respuesta que no es exitosa.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Retorna un observable para el usuario
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Crear un nuevo item
  createItem(item): Observable<Disco> {
    return this.http
      .post<Disco>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Obtener un disco por id
  getItem(id): Observable<Disco> {
    return this.http
      .get<Disco>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Obtener los discos
  getList(): Observable<Disco> {
    return this.http
      .get<Disco>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Actualizar item por ID
  updateItem(id, item): Observable<Disco> {
    return this.http
      .put<Disco>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Eliminar item por ID
  deleteItem(id) {
    return this.http
      .delete<Disco>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
