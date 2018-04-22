import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitiariesComponent } from './benefitiaries.component';

describe('BenefitiariesComponent', () => {
  let component: BenefitiariesComponent;
  let fixture: ComponentFixture<BenefitiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
