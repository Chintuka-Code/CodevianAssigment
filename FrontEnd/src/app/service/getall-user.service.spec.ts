import { TestBed } from '@angular/core/testing';

import { GetallUserService } from './getall-user.service';

describe('GetallUserService', () => {
  let service: GetallUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
