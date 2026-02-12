import { FbLogin } from './fb-login';

describe('FbLogin', () => {
  it('should create an instance', () => {
    const directive = new FbLogin();
    expect(directive).toBeTruthy();
  });
});
