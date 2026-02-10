import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss',
})
export class ResourceApiComponent implements OnInit {
  private readonly resourceService: ResourceService = inject(ResourceService);

  protected resourceData$: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.resourceData$ = this.resourceService.rxResourceData;
    this.resourceData$ = this.resourceService.resourceData;
  }
}
