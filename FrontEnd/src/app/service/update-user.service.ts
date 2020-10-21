import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url/User';
@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  constructor(private http: HttpClient) {}
  updateUser(data) {
    return this.http.post(`${URL}/updateUser`, data);
  }
}
