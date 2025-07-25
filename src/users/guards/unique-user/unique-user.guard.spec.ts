import { UniqueUserGuard } from './unique-user.guard';

describe('UniqueUserGuard', () => {
  it('should be defined', () => {
    expect(new UniqueUserGuard()).toBeDefined();
  });
});
