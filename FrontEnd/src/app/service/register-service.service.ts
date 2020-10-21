import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from '../url/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post(`${URL}/register`, data);
  }
}
