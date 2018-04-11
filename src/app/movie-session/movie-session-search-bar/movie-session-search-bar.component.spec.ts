import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSessionSearchBarComponent } from './movie-session-search-bar.component';

describe('MovieSessionSearchBarComponent', () => {
  let component: MovieSessionSearchBarComponent;
  let fixture: ComponentFixture<MovieSessionSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSessionSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSessionSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
