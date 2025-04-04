import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradosRComponent } from './filtrados-r.component';

describe('FiltradosRComponent', () => {
  let component: FiltradosRComponent;
  let fixture: ComponentFixture<FiltradosRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltradosRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradosRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
