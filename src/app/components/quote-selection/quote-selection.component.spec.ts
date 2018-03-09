import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSelectionComponent } from './quote-selection.component';

describe('QuoteSelectionComponent', () => {
  let component: QuoteSelectionComponent;
  let fixture: ComponentFixture<QuoteSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
