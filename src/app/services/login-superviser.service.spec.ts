import { TestBed } from '@angular/core/testing';

import { LoginSuperviserService } from './login-superviser.service';

describe('LoginSuperviserService', () => {
  let service: LoginSuperviserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSuperviserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
