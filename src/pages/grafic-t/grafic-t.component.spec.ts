import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficTComponent } from './grafic-t.component';

describe('GraficTComponent', () => {
  let component: GraficTComponent;
  let fixture: ComponentFixture<GraficTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
