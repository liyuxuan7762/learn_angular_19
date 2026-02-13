import { Component, inject, OnInit } from '@angular/core';
import { ShareUserServiceService } from '../service/share-user-service.service';

@Component({
  selector: 'app-dependency-injection',
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss',
})
export class DependencyInjectionComponent implements OnInit {
  protected userService: ShareUserServiceService = inject(
    ShareUserServiceService,
  );

  protected user: any = this.userService.user;

  protected userFromAPI: any = [];

  ngOnInit(): void {
    this.userService.getUserFromAPI().subscribe((resp) => {
      this.userFromAPI = resp;
    });
  }
}
