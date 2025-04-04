import { TestBed } from '@angular/core/testing';

import { TableRitmeService } from './table-ritme.service';

describe('TableRitmeService', () => {
  let service: TableRitmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableRitmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
