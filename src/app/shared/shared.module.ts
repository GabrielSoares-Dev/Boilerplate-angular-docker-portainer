import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { cssSpinner } from '@ng-icons/css.gg';

import { ToastService } from '@services/toast/toast.service';
import { ThemeService } from '@services/theme/theme.service';
import { CookieService } from '@services/cookie/cookie.service';
import { UserService } from '@services/user/user.service';

import {
  ToastrModule as ToastLibModule,
  ToastrService as ToastLibService,
} from 'ngx-toastr';
import { CookieService as CookieLibService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ cssSpinner }),
    ToastLibModule.forRoot({ autoDismiss: true, maxOpened: 1 }),
  ],
  exports: [ButtonComponent, InputComponent, FormsModule, ReactiveFormsModule],
  providers: [
    ToastLibService,
    CookieLibService,

    ToastService,
    ThemeService,
    CookieService,
    UserService,
  ],
})
export class SharedModule {}
