import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBuilderComponent } from './steps-builder.component';

describe('StepsBuilderComponent', () => {
  let component: StepsBuilderComponent;
  let fixture: ComponentFixture<StepsBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
