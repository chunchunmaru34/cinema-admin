import { TestBed, inject } from '@angular/core/testing';

import { MovieSessionService } from './movie-session.service';

describe('MovieSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSessionService]
    });
  });

  it('should be created', inject([MovieSessionService], (service: MovieSessionService) => {
    expect(service).toBeTruthy();
  }));
});
