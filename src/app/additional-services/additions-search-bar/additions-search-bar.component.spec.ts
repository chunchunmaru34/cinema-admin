import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionsSearchBarComponent } from './additions-search-bar.component';

describe('AdditionsSearchBarComponent', () => {
  let component: AdditionsSearchBarComponent;
  let fixture: ComponentFixture<AdditionsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
