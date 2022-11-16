import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArrendadoresComponent } from './list-arrendadores.component';

describe('ListArrendadoresComponent', () => {
  let component: ListArrendadoresComponent;
  let fixture: ComponentFixture<ListArrendadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArrendadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArrendadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
