import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteZipcodeComponent } from './quote-zipcode.component';

describe('QuoteZipcodeComponent', () => {
  let component: QuoteZipcodeComponent;
  let fixture: ComponentFixture<QuoteZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteZipcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
