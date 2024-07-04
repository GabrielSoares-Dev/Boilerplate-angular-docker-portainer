import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/user/user.service';

export const publicGuard: CanActivateFn = () => {
  const userService = inject(UserService);

  const notAuthenticated = !userService.isAuthenticated();

  if (notAuthenticated) return true;

  const routeService = inject(Router);

  routeService.navigate(['/home']);

  return false;
};
