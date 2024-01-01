import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
