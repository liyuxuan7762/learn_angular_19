import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../interface/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private readonly apiUrl: string = 'http://localhost:3000/users';
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public getUsers(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(this.apiUrl);
  }

  public postUser(user: Iuser) {
    return this.httpClient.post(this.apiUrl, user);
  }
}
