import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentwithidComponent } from './componentwithid.component';

describe('ComponentwithidComponent', () => {
  let component: ComponentwithidComponent;
  let fixture: ComponentFixture<ComponentwithidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentwithidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentwithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
