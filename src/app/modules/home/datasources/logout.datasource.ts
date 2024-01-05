import { Injectable } from '@angular/core';
import { LogoutUseCase } from '../usecases/logout.usecase';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@services/toast/toast.service';
import { CookieService } from '@services/cookie/cookie.service';
import { Router } from '@angular/router';

@Injectable()
export class LogoutDataSource {
  constructor(
    private logoutUseCase: LogoutUseCase,
    private toast: ToastService,
    private cookie: CookieService,
    private router: Router
  ) { }
  protected OnDestroy = new Subject<void>();

  isLoading = new BehaviorSubject(false);

  protected onError() {
    this.isLoading.next(false);
    this.toast.error('Falha ao sair tente novamente mais tarde', 'Erro');
  }

  protected onSuccess() {
    const loginPath = ''
    
    this.cookie.delete('token');
    this.router.navigate([loginPath]);
  }

  protected onComplete() {
    this.isLoading.next(false);
  }

  logout() {
    this.isLoading.next(true);

    this.logoutUseCase
      .run()
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
