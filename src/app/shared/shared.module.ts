import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { cssSpinner } from '@ng-icons/css.gg';
import { ToastService } from '@services/toast/toast.service';
import {
  ToastrModule as ToastLibModule,
  ToastrService as ToastLibService,
} from 'ngx-toastr';

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
  providers: [ToastLibService, ToastService],
})
export class SharedModule {}
