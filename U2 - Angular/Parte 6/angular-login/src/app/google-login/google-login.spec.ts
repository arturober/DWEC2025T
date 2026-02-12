import { GoogleLogin } from './google-login';

describe('GoogleLogin', () => {
  it('should create an instance', () => {
    const directive = new GoogleLogin();
    expect(directive).toBeTruthy();
  });
});
