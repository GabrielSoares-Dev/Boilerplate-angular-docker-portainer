import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
import type {
  InputLoginServiceDto,
  OutputLoginServiceDto,
} from '@dtos/auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  protected apiUrl = environment.api;

  login(input: InputLoginServiceDto) {
    const body = input;

    return this.http.post<OutputLoginServiceDto>(
      `${this.apiUrl}/v1/auth/login`,
      body
    );
  }
}
