import { Injectable } from '@angular/core';
import { TranslateService as TranslateLibService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private translate: TranslateLibService) {}

  setLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }
}
