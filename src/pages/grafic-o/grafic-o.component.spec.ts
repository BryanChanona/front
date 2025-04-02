import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficOComponent } from './grafic-o.component';

describe('GraficOComponent', () => {
  let component: GraficOComponent;
  let fixture: ComponentFixture<GraficOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
