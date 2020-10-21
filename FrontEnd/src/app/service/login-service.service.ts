import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url/User';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.get(`${URL}/login`, {
      headers: {
        email: data.email,
        password: data.password,
      },
    });
  }
}
