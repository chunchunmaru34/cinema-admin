import { TestBed, inject } from '@angular/core/testing';

import { SeatsTypeService } from './seats-type.service';

describe('SeatsTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatsTypeService]
    });
  });

  it('should be created', inject([SeatsTypeService], (service: SeatsTypeService) => {
    expect(service).toBeTruthy();
  }));
});
