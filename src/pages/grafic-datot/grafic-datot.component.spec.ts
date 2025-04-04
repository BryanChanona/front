import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficDatotComponent } from './grafic-datot.component';

describe('GraficDatotComponent', () => {
  let component: GraficDatotComponent;
  let fixture: ComponentFixture<GraficDatotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficDatotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficDatotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
