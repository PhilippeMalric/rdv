import { TestBed, inject } from '@angular/core/testing';

import { RmdbExpService } from './rmdb-exp-service';

describe('RmdbExpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RmdbExpService]
    });
  });

  it('should be created', inject([RmdbExpService], (service: RmdbExpService) => {
    expect(service).toBeTruthy();
  }));
});
