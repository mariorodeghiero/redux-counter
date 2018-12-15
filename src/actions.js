/**
 *
 * action creators , uma função que retorna um objeto
 */

export const increment = value => {
  return {
    type: 'INCREMENT',
    value: value
  };
};
export const decrement = value => {
  return {
    type: 'DECREMENT',
    value: value
  };
};
