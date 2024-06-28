import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpUser } from './sign-up-user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:8080'; // Replace with your Java backend URL

  constructor(private http: HttpClient) { }

  signup(user: SignUpUser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, user);
  }
}

