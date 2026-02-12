import { CanDeactivateFn } from '@angular/router';

export const formGuardGuard: CanDeactivateFn<any> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return component.canDeactivate();
};
