import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDocsComponent } from './drivers-docs.component';

describe('DriversDocsComponent', () => {
  let component: DriversDocsComponent;
  let fixture: ComponentFixture<DriversDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
