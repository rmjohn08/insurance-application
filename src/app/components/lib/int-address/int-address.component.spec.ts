import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntAddressComponent } from './int-address.component';

describe('IntAddressComponent', () => {
  let component: IntAddressComponent;
  let fixture: ComponentFixture<IntAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
