import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesCategoryCreateComponent } from './plates-category-create.component';

describe('PlatesCategoryCreateComponent', () => {
  let component: PlatesCategoryCreateComponent;
  let fixture: ComponentFixture<PlatesCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
