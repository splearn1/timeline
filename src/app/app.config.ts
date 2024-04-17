import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { authInterceptor } from './interceptors/auth.interceptor';
import { of } from 'rxjs';

export function initializeUserData(userService: UserService, authService: AuthenticationService){
  if(authService.isLoggedIn()){
    return () => userService.refreshUserData().subscribe();
  }else{
    return () => of(null);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUserData,
      deps: [UserService, AuthenticationService],
      multi: true
    },
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
