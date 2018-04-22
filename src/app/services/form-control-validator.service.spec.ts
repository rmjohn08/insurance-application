import { TestBed, inject } from '@angular/core/testing';

import { FormControlValidatorService } from './form-control-validator.service';

describe('FormControlValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormControlValidatorService]
    });
  });

  it('should be created', inject([FormControlValidatorService], (service: FormControlValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
