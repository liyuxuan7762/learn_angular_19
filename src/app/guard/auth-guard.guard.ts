import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  // inject router
  const router = inject(Router);

  const isBrowser = typeof window !== 'undefined';

  // get user from session storage
  const user = isBrowser ? sessionStorage.getItem('user') : null;

  if (user) {
    console.log('User is logged in');
    return true;
  }

  // if user is not found, redirect to login page
  router.navigate(['/user']);
  console.log('User is not logged in');
  return false;
};
