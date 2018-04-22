import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticAddressComponent } from './domestic-address.component';

describe('DomesticAddressComponent', () => {
  let component: DomesticAddressComponent;
  let fixture: ComponentFixture<DomesticAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
