import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsDetailsComponent } from './chefs-details.component';

describe('ChefsDetailsComponent', () => {
  let component: ChefsDetailsComponent;
  let fixture: ComponentFixture<ChefsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
