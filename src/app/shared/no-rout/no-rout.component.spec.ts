import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRoutComponent } from './no-rout.component';

describe('NoRoutComponent', () => {
  let component: NoRoutComponent;
  let fixture: ComponentFixture<NoRoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
