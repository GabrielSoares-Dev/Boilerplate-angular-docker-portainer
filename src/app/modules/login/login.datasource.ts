import { Injectable } from '@angular/core';
import { LoginUseCase } from './login.usecase';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@services/toast/toast.service';
import { CookieService } from '@services/cookie/cookie.service';
import { Router } from '@angular/router';
import type { OutputLoginServiceDto } from '@src/app/core/dtos/auth.dto';

@Injectable()
export class LoginDataSource {
  constructor(
    private loginUseCase: LoginUseCase,
    private toast: ToastService,
    private cookie: CookieService,
    private router: Router
  ) {}
  protected OnDestroy = new Subject<void>();

  isLoading = new BehaviorSubject(false);

  protected onError() {
    this.isLoading.next(false);
    this.toast.error('Credenciais Inválidas', 'Erro');
  }

  protected onSuccess(output: OutputLoginServiceDto) {
    const token = output.content.token;
    this.cookie.set('token', token);
    this.router.navigate(['home']);
  }

  protected onComplete() {
    this.isLoading.next(false);
  }

  login(email: string, password: string) {
    this.isLoading.next(true);
    const input = {
      email,
      password,
    };

    this.loginUseCase
      .run(input)
      .pipe(takeUntil(this.OnDestroy))
      .subscribe({
        next: output => this.onSuccess(output),
        error: () => this.onError(),
        complete: () => this.onComplete(),
      });
  }

  disconnectDataSource() {
    this.OnDestroy.next();
    this.OnDestroy.complete();
  }
}
