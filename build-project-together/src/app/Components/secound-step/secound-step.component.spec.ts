import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundStepComponent } from './secound-step.component';

describe('SecoundStepComponent', () => {
  let component: SecoundStepComponent;
  let fixture: ComponentFixture<SecoundStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
