import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxigenacionComponent } from './oxigenacion.component';

describe('OxigenacionComponent', () => {
  let component: OxigenacionComponent;
  let fixture: ComponentFixture<OxigenacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OxigenacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxigenacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
