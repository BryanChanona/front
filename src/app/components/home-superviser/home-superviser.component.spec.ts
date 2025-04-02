import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuperviserComponent } from './home-superviser.component';

describe('HomeSuperviserComponent', () => {
  let component: HomeSuperviserComponent;
  let fixture: ComponentFixture<HomeSuperviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSuperviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSuperviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
