import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSuperviserComponent } from './static-superviser.component';

describe('StaticSuperviserComponent', () => {
  let component: StaticSuperviserComponent;
  let fixture: ComponentFixture<StaticSuperviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticSuperviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticSuperviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
