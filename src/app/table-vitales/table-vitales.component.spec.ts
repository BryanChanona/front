import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVitalesComponent } from './table-vitales.component';

describe('TableVitalesComponent', () => {
  let component: TableVitalesComponent;
  let fixture: ComponentFixture<TableVitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableVitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
