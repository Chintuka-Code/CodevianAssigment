import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url/User';
@Injectable({
  providedIn: 'root',
})
export class GetallUserService {
  constructor(private http: HttpClient) {}

  getalluser() {
    return this.http.get(`${URL}/getallUser`);
  }
}
