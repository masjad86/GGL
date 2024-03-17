import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnFilterComponent } from './table-column-filter.component';

describe('TableColumnFilterComponent', () => {
  let component: TableColumnFilterComponent;
  let fixture: ComponentFixture<TableColumnFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableColumnFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableColumnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
