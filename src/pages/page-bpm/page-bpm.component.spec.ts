import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBpmComponent } from './page-bpm.component';

describe('PageBpmComponent', () => {
  let component: PageBpmComponent;
  let fixture: ComponentFixture<PageBpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageBpmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
