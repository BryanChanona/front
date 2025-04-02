import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRComponent } from './page-r.component';

describe('PageRComponent', () => {
  let component: PageRComponent;
  let fixture: ComponentFixture<PageRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
