import { TestBed } from '@angular/core/testing';

import { RegisterSupervisorService } from './register-supervisor.service';

describe('RegisterSupervisorService', () => {
  let service: RegisterSupervisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSupervisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
