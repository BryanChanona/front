import { TestBed } from '@angular/core/testing';

import { FilterTemperaturaService } from './filter-temperatura.service';

describe('FilterTemperaturaService', () => {
  let service: FilterTemperaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterTemperaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
