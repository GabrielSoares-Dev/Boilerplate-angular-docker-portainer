import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  protected apiUrl = environment.api;

  login(input: unknown) {
    const body = input;

    return this.http.post(`${this.apiUrl}`, body);
  }
}
