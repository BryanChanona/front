import { TestBed } from '@angular/core/testing';

import { TableOxigenacionService } from './table-oxigenacion.service';

describe('TableOxigenacionService', () => {
  let service: TableOxigenacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableOxigenacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
