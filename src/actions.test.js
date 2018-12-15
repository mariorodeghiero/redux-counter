import { increment, decrement } from './actions';

test('should Action Increment: ', () => {
  let incr = increment(10);
  expect(incr).toEqual({
    type: 'INCREMENT',
    value: 10
  });
});

test('should Action Decrement: ', () => {
  let decr = decrement(20);
  expect(decr).toEqual({
    type: 'DECREMENT',
    value: 20
  });
});
