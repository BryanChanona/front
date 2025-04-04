import { TestBed } from '@angular/core/testing';

import { FilterRitmoService } from './filter-ritmo.service';

describe('FilterRitmoService', () => {
  let service: FilterRitmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterRitmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
