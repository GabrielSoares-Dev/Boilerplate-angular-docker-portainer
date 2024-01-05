import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/user/user.service';

export const privateGuard: CanActivateFn = () => {
  const userService = inject(UserService);

  const isAuthenticated = userService.isAuthenticated();

  if (isAuthenticated) return true;

  const routeService = inject(Router);

  routeService.navigate(['/']);

  return false;
};
