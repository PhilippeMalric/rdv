import { MyJoinPipe } from './my-join.pipe';

describe('MyJoinPipe', () => {
  it('create an instance', () => {
    const pipe = new MyJoinPipe();
    expect(pipe).toBeTruthy();
  });
});
