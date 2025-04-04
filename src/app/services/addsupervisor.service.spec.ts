import { TestBed } from '@angular/core/testing';

import { AddsupervisorService } from './addsupervisor.service';

describe('AddsupervisorService', () => {
  let service: AddsupervisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsupervisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
