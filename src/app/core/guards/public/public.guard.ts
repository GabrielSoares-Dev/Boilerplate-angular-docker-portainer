import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/user/user.service';

export const publicGuard: CanActivateFn = () => {
  const userService = inject(UserService);

  const notLogged = !userService.isLogged();

  if (notLogged) return true;

  const routeService = inject(Router);

  routeService.navigate(['/home']);

  return false;
};
