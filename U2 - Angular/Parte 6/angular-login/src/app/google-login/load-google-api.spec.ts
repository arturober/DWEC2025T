import { TestBed } from '@angular/core/testing';

import { LoadGoogleApi } from './load-google-api';

describe('LoadGoogleApi', () => {
  let service: LoadGoogleApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadGoogleApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
