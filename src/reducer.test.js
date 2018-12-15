import reducer from './reducer';

test('should reducer Increment', () => {
  const initialState = { count: 0 };
  const action = { type: 'INCREMENT', value: 10 };
  const state = reducer(initialState, action);
  expect(state).toEqual({ count: 10 });
});

test('should reducer Decrement', () => {
  const initialState = { count: 0 };
  const action = { type: 'DECREMENT', value: 20 };
  const state = reducer(initialState, action);
  expect(state).toEqual({ count: -20 });
});
