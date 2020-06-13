import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsDocsComponent } from './chefs-docs.component';

describe('ChefsDocsComponent', () => {
  let component: ChefsDocsComponent;
  let fixture: ComponentFixture<ChefsDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
