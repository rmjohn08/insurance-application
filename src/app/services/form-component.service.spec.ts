import { TestBed, inject } from '@angular/core/testing';

import { FormComponentService } from './form-component.service';

describe('FormComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormComponentService]
    });
  });

  it('should be created', inject([FormComponentService], (service: FormComponentService) => {
    expect(service).toBeTruthy();
  }));
});
