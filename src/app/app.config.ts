import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptor/token.interceptor';
import { globalErrorInterceptor } from './global-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withPreloading(
        PreloadAllModules,
      ),
    ),
    provideClientHydration(withEventReplay()),
    DatePipe,
    provideHttpClient(
      withInterceptors([tokenInterceptor, globalErrorInterceptor]),
    ),
  ],
};
