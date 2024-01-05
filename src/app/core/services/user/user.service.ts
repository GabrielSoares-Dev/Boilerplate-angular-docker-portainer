import { Injectable } from '@angular/core';
import { CookieService } from '@services/cookie/cookie.service';
import { jwtDecode } from 'jwt-decode';
import { UserDto, UserDtoTokenDecoded } from '@dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private cookie: CookieService) {}

  getCurrent(): UserDto {
    const token = this.cookie.get('token');

    const data = jwtDecode(token) as UserDtoTokenDecoded;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phoneNumber: data.phone_number,
      role: data.role,
      permissions: data.permissions,
    };
  }

  isLogged() {
    let isLogged: boolean;
    try {
      this.getCurrent();
      isLogged = true;
    } catch (error) {
      isLogged = false;
    }

    return isLogged;
  }
}
