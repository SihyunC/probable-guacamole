import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesDetailsComponent } from './plates-details.component';

describe('PlatesDetailsComponent', () => {
  let component: PlatesDetailsComponent;
  let fixture: ComponentFixture<PlatesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
