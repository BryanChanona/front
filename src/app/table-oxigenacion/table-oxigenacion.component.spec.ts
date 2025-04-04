import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOxigenacionComponent } from './table-oxigenacion.component';

describe('TableOxigenacionComponent', () => {
  let component: TableOxigenacionComponent;
  let fixture: ComponentFixture<TableOxigenacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOxigenacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOxigenacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
