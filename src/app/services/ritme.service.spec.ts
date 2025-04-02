import { TestBed } from '@angular/core/testing';

import { RitmeService } from './ritme.service';

describe('RitmeService', () => {
  let service: RitmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RitmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
