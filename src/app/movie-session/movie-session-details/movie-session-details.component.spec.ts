import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSessionDetailsComponent } from './movie-session-details.component';

describe('MovieSessionDetailsComponent', () => {
  let component: MovieSessionDetailsComponent;
  let fixture: ComponentFixture<MovieSessionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSessionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
