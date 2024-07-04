import { Injectable } from '@angular/core';
import { AuthService } from '@services/modules/auth/auth.service';

@Injectable()
export class LogoutUseCase {
  constructor(private authService: AuthService) {}

  run() {
    return this.authService.logout();
  }
}
