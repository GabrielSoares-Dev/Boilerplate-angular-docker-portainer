import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'DARK' | 'LIGHT';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  protected theme = new BehaviorSubject<Theme>(this.getInitial());

  setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
    this.theme.next(theme);
  }

  getCurrent() {
    return this.theme;
  }

  isDark() {
    return this.theme.value === 'DARK';
  }

  isLight() {
    return this.theme.value === 'LIGHT';
  }

  private getInitial(): Theme {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as Theme) || 'DARK';
  }
}
