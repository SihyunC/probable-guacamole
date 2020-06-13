import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsDocsDetailsComponent } from './chefs-docs-details.component';

describe('ChefsDocsDetailsComponent', () => {
  let component: ChefsDocsDetailsComponent;
  let fixture: ComponentFixture<ChefsDocsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsDocsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsDocsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
