import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOxigenoComponent } from './s-oxigeno.component';

describe('SOxigenoComponent', () => {
  let component: SOxigenoComponent;
  let fixture: ComponentFixture<SOxigenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SOxigenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SOxigenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
