import { TestBed } from '@angular/core/testing';

import { FiltradosRService } from './filtrados-r.service';

describe('FiltradosRService', () => {
  let service: FiltradosRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltradosRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
