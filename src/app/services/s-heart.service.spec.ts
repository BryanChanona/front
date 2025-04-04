import { TestBed } from '@angular/core/testing';

import { SHeartService } from './s-heart.service';

describe('SHeartService', () => {
  let service: SHeartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHeartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
