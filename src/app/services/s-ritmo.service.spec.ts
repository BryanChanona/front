import { TestBed } from '@angular/core/testing';

import { SRitmoService } from './s-ritmo.service';

describe('SRitmoService', () => {
  let service: SRitmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRitmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
