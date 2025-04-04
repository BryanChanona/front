import { TestBed } from '@angular/core/testing';

import { TableBpmService } from './table-bpm.service';

describe('TableBpmService', () => {
  let service: TableBpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableBpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
