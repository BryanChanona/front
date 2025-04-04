import { TestBed } from '@angular/core/testing';

import { SOxigenoService } from './s-oxigeno.service';

describe('SOxigenoService', () => {
  let service: SOxigenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SOxigenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
