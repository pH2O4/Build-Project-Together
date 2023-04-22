import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeProjectComponent } from './makeproject.component';

describe('AboutComponent', () => {
  let component: MakeProjectComponent;
  let fixture: ComponentFixture<MakeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
