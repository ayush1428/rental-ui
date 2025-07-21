import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const router = inject(Router);
  const toastr = inject(ToastrService); // ✅ Inject Toastr

  let clonedReq = req;
  if (token && username) {
    clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        Username: username
      }
    });
  }

  return next(clonedReq).pipe(
    catchError(err => {
      if (err.status === 401 || err.status === 403) {
        console.warn('Session expired — redirecting to Sign In');

        localStorage.clear();
        toastr.error('Session expired. Please sign in again.', 'Error', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });

        router.navigate(['/signin']);
      }

      return throwError(() => err);
    })
  );
};
