import { TestBed } from '@angular/core/testing';

import { STemperatureService } from './s-temperature.service';

describe('STemperatureService', () => {
  let service: STemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
