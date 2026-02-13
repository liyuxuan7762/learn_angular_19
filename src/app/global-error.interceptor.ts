import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const globalErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // 只示例和 user 详情相关的逻辑，其他错误你可以按需保留

      // 1. 用户详情接口 404 → 跳 not-found
      if (error.status === 404) {
        console.log(error);
        router.navigate(['/not-found']);
        // 这里一般不需要再弹 alert，避免重复体验
        return throwError(() => error);
      }

      // 2. 其他错误的通用处理
      if (error.status === 0) {
        alert('Network error. Please check your connection.');
      } else if (error.status === 401) {
        alert('Unauthorized. Please login again.');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user');
        }
        router.navigate(['/login']);
      } else if (error.status >= 500) {
        alert('Server error. Please try again later.');
      } else {
        const msg =
          (error.error && (error.error.message || error.error.msg)) ||
          `Request failed with status ${error.status}`;
        alert(msg);
      }

      return throwError(() => error);
    }),
  );
};
