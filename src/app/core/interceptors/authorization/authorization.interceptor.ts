import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '@services/user/user.service';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);

  const isAuthenticated = userService.isAuthenticated();
  const token = userService.getToken();
  const modifiedRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return isAuthenticated ? next(modifiedRequest) : next(req);
};
