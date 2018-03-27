import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsTypesComponent } from './seats-types.component';

describe('SeatsTypesComponent', () => {
  let component: SeatsTypesComponent;
  let fixture: ComponentFixture<SeatsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
