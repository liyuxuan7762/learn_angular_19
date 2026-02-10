import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private readonly resourceUrl: string =
    'https://jsonplaceholder.typicode.com/users';

  private httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  rxResourceData = rxResource({
    loader: () => this.httpClient.get(this.resourceUrl),
  });

  resourceData = resource({
    loader: () => fetch(this.resourceUrl).then((res) => res.json()) as Promise<any>,
  });
}
