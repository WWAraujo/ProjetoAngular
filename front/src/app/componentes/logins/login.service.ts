import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/login'

  constructor(private http: HttpClient) { }

  // testeLogin(login: Login): Observable<Login> {
  //   return this.http.get<Login>(this.API)
  // }

  login(login: Login): Observable<Login> {
    return this.http.post<Login>(this.API, login)
  }

}
