import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperviserComponent } from './menu-superviser.component';

describe('MenuSuperviserComponent', () => {
  let component: MenuSuperviserComponent;
  let fixture: ComponentFixture<MenuSuperviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSuperviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSuperviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
