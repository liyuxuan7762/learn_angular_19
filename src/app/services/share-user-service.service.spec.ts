import { TestBed } from '@angular/core/testing';

import { ShareUserServiceService } from './share-user-service.service';

describe('ShareUserServiceService', () => {
  let service: ShareUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
