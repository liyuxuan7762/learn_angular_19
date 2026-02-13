import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'learn_angular_19';

  private readonly router = inject(Router);

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');

    // controll navigation from parent window
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:4300') {
        console.log(event);

        // navigate
        this.router.navigateByUrl(event.data?.route);
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        window.parent.postMessage(
          { type: 'routeChanged', route: event.urlAfterRedirects },
          'http://localhost:4300',
        );
      }
    });
  }
}
