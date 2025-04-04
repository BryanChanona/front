import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STemperaturaComponent } from './s-temperatura.component';

describe('STemperaturaComponent', () => {
  let component: STemperaturaComponent;
  let fixture: ComponentFixture<STemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [STemperaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
