import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNameComponent } from './applicant-name.component';

describe('ApplicantNameComponent', () => {
  let component: ApplicantNameComponent;
  let fixture: ComponentFixture<ApplicantNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
