import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    ),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    }),
  ],
}).catch((err) => console.error(err));
