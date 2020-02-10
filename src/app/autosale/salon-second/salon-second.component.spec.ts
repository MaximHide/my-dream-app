import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonSecondComponent } from './salon-second.component';

describe('SalonSecondComponent', () => {
  let component: SalonSecondComponent;
  let fixture: ComponentFixture<SalonSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
