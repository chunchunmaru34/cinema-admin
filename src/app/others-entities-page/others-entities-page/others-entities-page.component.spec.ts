import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersEntitiesPageComponent } from './others-entities-page.component';

describe('OthersEntitiesPageComponent', () => {
  let component: OthersEntitiesPageComponent;
  let fixture: ComponentFixture<OthersEntitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersEntitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersEntitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
