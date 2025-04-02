import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseCardiacComponent } from './pulse-cardiac.component';

describe('PulseCardiacComponent', () => {
  let component: PulseCardiacComponent;
  let fixture: ComponentFixture<PulseCardiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PulseCardiacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulseCardiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
