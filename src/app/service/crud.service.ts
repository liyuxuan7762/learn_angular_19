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
    return this.httpClient.get<Iuser[]>(this.apiUrl, {
      withCredentials: true,
    });
  }

  public postUser(user: Iuser) {
    return this.httpClient.post(this.apiUrl, user);
  }

  public getUserById(id: number): Observable<Iuser> {
    return this.httpClient.get<Iuser>(`${this.apiUrl}/${id}`);
  }

  public updateUser(id: number, user: Iuser) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, user);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
