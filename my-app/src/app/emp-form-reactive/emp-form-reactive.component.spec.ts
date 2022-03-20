import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFormReactiveComponent } from './emp-form-reactive.component';

describe('EmpFormReactiveComponent', () => {
  let component: EmpFormReactiveComponent;
  let fixture: ComponentFixture<EmpFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
