import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { noAuthGuard } from './no-auth.guard';

export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    canActivate: [noAuthGuard],
  },
  {
    path:'signup',
    loadComponent: () => import('./signup/signup.component').then((m) => m.SignupComponent),
    canActivate: [noAuthGuard],
  },
  {
    path: 'timeline',
    loadComponent: () => import('./timeline/timeline.component').then((m) => m.TimelineComponent),
    canActivate: [authGuard]
  }
];
