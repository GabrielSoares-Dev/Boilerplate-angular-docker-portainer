import { Routes } from '@angular/router';
import { LoginComponent } from '@modules/login/login.component';
import { HomeComponent } from '@modules/home/home.component';
import { privateGuard } from '@guards/private/private.guard';
import { publicGuard } from '@guards/public/public.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [publicGuard] },
  { path: 'home', component: HomeComponent, canActivate: [privateGuard] },
];
