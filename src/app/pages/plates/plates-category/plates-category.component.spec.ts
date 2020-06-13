import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesCategoryComponent } from './plates-category.component';

describe('PlatesCategoryComponent', () => {
  let component: PlatesCategoryComponent;
  let fixture: ComponentFixture<PlatesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
