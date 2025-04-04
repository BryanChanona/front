import { TestBed } from '@angular/core/testing';

import { TableTemperatureService } from './table-temperature.service';

describe('TableTemperatureService', () => {
  let service: TableTemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableTemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
