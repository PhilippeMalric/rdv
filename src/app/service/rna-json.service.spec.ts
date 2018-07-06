import { TestBed, inject } from '@angular/core/testing';

import { RnaJsonService } from './rna-json.service';

describe('RnaJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RnaJsonService]
    });
  });

  it('should be created', inject([RnaJsonService], (service: RnaJsonService) => {
    expect(service).toBeTruthy();
  }));
});
