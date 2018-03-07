import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionsListComponent } from './additions-list.component';

describe('AdditionsListComponent', () => {
  let component: AdditionsListComponent;
  let fixture: ComponentFixture<AdditionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
