import { TestBed } from '@angular/core/testing';

import { FilterOxigenacionService } from './filter-oxigenacion.service';

describe('FilterOxigenacionService', () => {
  let service: FilterOxigenacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterOxigenacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
