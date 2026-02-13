import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // 关键：先判断是不是在浏览器环境
  const isBrowser = typeof window !== 'undefined';

  const user = isBrowser ? localStorage.getItem('user') : null;

  if (!user) {
    // 没有 token，或者当前不是浏览器环境，直接放行原始请求
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${user}`,
    },
  });

  return next(authReq);
};
