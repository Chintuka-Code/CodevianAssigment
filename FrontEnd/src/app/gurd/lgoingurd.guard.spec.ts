import { TestBed } from '@angular/core/testing';

import { LgoingurdGuard } from './lgoingurd.guard';

describe('LgoingurdGuard', () => {
  let guard: LgoingurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LgoingurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
