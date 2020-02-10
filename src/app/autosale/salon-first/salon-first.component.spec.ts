import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonFirstComponent } from './salon-first.component';

describe('SalonFirstComponent', () => {
  let component: SalonFirstComponent;
  let fixture: ComponentFixture<SalonFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
