import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss',
})
export class StorageComponent {
  protected sessionValue: string = '';
  protected localStorageValue: string = '';
  protected cookieValue: string = '';

  protected setSessionStorage(): void {
    sessionStorage.setItem('sessionValue', 'Hello Session Storage');
  }

  protected getSessionStorage(): void {
    this.sessionValue = sessionStorage.getItem('sessionValue') || '';
  }

  protected removeSessionStorage(): void {
    sessionStorage.removeItem('sessionValue');
  }

  protected clearSessionStorage(): void {
    sessionStorage.clear();
  }

  protected setLocalStorage(): void {
    localStorage.setItem('localStorageValue', 'Hello Local Storage');
  }

  protected getLocalStorage(): void {
    this.localStorageValue = localStorage.getItem('localStorageValue') || '';
  }

  protected removeLocalStorage(): void {
    localStorage.removeItem('localStorageValue');
  }

  protected clearLocalStorage(): void {
    localStorage.clear();
  }

  private cookieService: CookieService = inject(CookieService);

  protected setCookies(): void {
    this.cookieService.set('cookieValue', 'Hello Cookies', 1);
  }

  protected getCookies(): void {
    this.cookieValue = this.cookieService.get('cookieValue') || '';
  }
  protected removeCookies(): void {
    this.cookieService.delete('cookieValue');
  }
  protected clearCookies(): void {
    this.cookieService.deleteAll();
  }
}
