import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url/User';
@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  constructor(private http: HttpClient) {}

  getuser(data) {
    return this.http.get(`${URL}/getuser`, {
      params: {
        email: data.email,
        token: data.token,
      },
    });
  }
}
