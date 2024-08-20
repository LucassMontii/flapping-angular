import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse, IUser } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signUp(body: any): Observable<IResponse<IUser>>{
    console.log(body);
    return this.http.post<IResponse<IUser>>('http://localhost:3000/auth/sign-up', body)
  }
  public login(body: any): Observable<IResponse<IUser>>{
    console.log(body);
    return this.http.post<IResponse<IUser>>('http://localhost:3000/auth/login', body)
  }
}
