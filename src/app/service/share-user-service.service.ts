import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareUserServiceService {
  private readonly API_URL: string =
    'https://jsonplaceholder.typicode.com/users';

  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public user: any = {
    id: 0,
    name: 'Jack',
    email: 'Jack@test.com',
    password: '12321312',
    role: 'ADMIN',
  };

  public isAdmin(): boolean {
    return this.user.role === 'ADMIN';
  }
  public getUserFromAPI(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
