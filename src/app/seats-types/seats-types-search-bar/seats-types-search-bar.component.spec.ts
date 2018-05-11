import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsTypesSearchBarComponent } from './seats-types-search-bar.component';

describe('SeatsTypesSearchBarComponent', () => {
  let component: SeatsTypesSearchBarComponent;
  let fixture: ComponentFixture<SeatsTypesSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsTypesSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsTypesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
