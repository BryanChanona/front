import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficRComponent } from './grafic-r.component';

describe('GraficRComponent', () => {
  let component: GraficRComponent;
  let fixture: ComponentFixture<GraficRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
