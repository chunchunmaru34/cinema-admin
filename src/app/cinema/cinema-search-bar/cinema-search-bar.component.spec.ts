import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSearchBarComponent } from './cinema-search-bar.component';

describe('CinemaSearchBarComponent', () => {
  let component: CinemaSearchBarComponent;
  let fixture: ComponentFixture<CinemaSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
