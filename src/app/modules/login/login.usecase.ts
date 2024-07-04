import { Injectable } from '@angular/core';
import { AuthService } from '@services/modules/auth/auth.service';
import type { InputLoginUseCaseDto } from '@src/app/core/dtos/auth.dto';

@Injectable()
export class LoginUseCase {
  constructor(private authService: AuthService) {}

  run(input: InputLoginUseCaseDto) {
    return this.authService.login(input);
  }
}
