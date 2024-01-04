import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthService } from '@services/modules/auth/auth.service';
import { LoginUseCase } from './login.usecase';
import { LoginDataSource } from './login.datasource';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule],
  providers: [AuthService, LoginUseCase, LoginDataSource],
})
export class LoginModule {}
