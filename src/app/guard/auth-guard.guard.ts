import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  // inject router
  const router = inject(Router);

  // get user from session storage
  const user = sessionStorage.getItem('user');

  if (user) {
    console.log('User is logged in');
    return true;
  }

  // if user is not found, redirect to login page
  router.navigate(['/user']);
  console.log('User is not logged in');
  return false;
};
