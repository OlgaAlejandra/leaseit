import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperationsComponent } from './list-operations.component';

describe('ListOperationsComponent', () => {
  let component: ListOperationsComponent;
  let fixture: ComponentFixture<ListOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
