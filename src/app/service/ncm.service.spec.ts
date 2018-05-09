import { TestBed, inject } from '@angular/core/testing';

import { NCMService } from './ncm.service';

describe('NCMService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NCMService]
    });
  });

  it('should be created', inject([NCMService], (service: NCMService) => {
    expect(service).toBeTruthy();
  }));
});
