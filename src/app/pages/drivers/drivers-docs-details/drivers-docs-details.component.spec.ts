import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDocsDetailsComponent } from './drivers-docs-details.component';

describe('DriversDocsDetailsComponent', () => {
  let component: DriversDocsDetailsComponent;
  let fixture: ComponentFixture<DriversDocsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversDocsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDocsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
