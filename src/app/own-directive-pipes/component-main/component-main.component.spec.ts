import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMainComponent } from './component-main.component';

describe('ComponentMainComponent', () => {
  let component: ComponentMainComponent;
  let fixture: ComponentFixture<ComponentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
