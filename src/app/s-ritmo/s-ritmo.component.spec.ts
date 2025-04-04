import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRitmoComponent } from './s-ritmo.component';

describe('SRitmoComponent', () => {
  let component: SRitmoComponent;
  let fixture: ComponentFixture<SRitmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SRitmoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SRitmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
