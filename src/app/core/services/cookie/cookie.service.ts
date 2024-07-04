import { Injectable } from '@angular/core';
import { CookieService as CookieLibService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(private cookieService: CookieLibService) {}

  get(name: string) {
    return this.cookieService.get(name);
  }

  set(name: string, value: string) {
    const expiresInSeconds = 24 * 60 * 60; //one day
    return this.cookieService.set(name, value, { expires: expiresInSeconds });
  }

  delete(name: string) {
    return this.cookieService.delete(name);
  }
}
