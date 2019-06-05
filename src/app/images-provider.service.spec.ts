import { TestBed, inject } from '@angular/core/testing';

import { ImagesProviderService } from './images-provider.service';

describe('ImagesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesProviderService]
    });
  });

  it('should be created', inject([ImagesProviderService], (service: ImagesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
