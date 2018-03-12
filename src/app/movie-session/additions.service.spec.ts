import { TestBed, inject } from '@angular/core/testing';

import { AdditionsService } from './additions.service';

describe('AdditionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditionsService]
    });
  });

  it('should be created', inject([AdditionsService], (service: AdditionsService) => {
    expect(service).toBeTruthy();
  }));
});
