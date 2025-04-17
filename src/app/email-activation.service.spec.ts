import { TestBed } from '@angular/core/testing';

import { EmailActivationService } from './email-activation.service';

describe('EmailActivationService', () => {
  let service: EmailActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailActivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
