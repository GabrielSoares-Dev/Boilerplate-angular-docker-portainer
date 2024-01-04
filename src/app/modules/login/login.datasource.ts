import { Injectable } from '@angular/core';
import { LoginUseCase } from './login.usecase';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@services/toast/toast.service';

@Injectable()
export class LoginDataSource {
  constructor(
    private loginUseCase: LoginUseCase,
    private toast: ToastService
  ) {}
  protected OnDestroy = new Subject<void>();

  isLoading = new BehaviorSubject(false);

  protected onError() {
    this.isLoading.next(false);
    this.toast.error('Credenciais Inválidas', 'Erro');
  }

  protected onSuccess() {
    this.toast.success('Logado', 'Sucesso');
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
        next: () => this.onSuccess(),
        error: () => this.onError(),
        complete: () => this.onComplete(),
      });
  }

  disconnectDataSource() {
    this.OnDestroy.next();
    this.OnDestroy.complete();
  }
}
