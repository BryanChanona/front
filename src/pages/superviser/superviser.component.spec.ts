import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviserComponent } from './superviser.component';

describe('SuperviserComponent', () => {
  let component: SuperviserComponent;
  let fixture: ComponentFixture<SuperviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
