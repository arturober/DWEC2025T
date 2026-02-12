import { TestBed } from '@angular/core/testing';

import { LoadFbApi } from './load-fb-api';

describe('LoadFbApi', () => {
  let service: LoadFbApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFbApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
