import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080'; // Replace with your Java backend URL

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }
}

