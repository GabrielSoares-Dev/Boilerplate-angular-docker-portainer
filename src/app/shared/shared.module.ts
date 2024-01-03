import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { cssSpinner } from '@ng-icons/css.gg';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ cssSpinner }),
  ],
  exports: [ButtonComponent, InputComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
