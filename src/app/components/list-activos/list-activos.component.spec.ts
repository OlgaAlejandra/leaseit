import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivosComponent } from './list-activos.component';

describe('ListActivosComponent', () => {
  let component: ListActivosComponent;
  let fixture: ComponentFixture<ListActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
