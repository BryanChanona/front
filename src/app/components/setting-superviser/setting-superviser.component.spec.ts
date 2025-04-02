import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSuperviserComponent } from './setting-superviser.component';

describe('SettingSuperviserComponent', () => {
  let component: SettingSuperviserComponent;
  let fixture: ComponentFixture<SettingSuperviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingSuperviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSuperviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
