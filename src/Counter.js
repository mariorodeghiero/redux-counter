import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = ({ count, decrement1, increment1 }) => {
  return (
    <div>
      counter: {count}
      <br />
      <button onClick={() => increment1(10)}>+</button>
      <button onClick={() => decrement1(20)}>-</button>
    </div>
  );
};

/**
 * Sempre retorna um objeto para o componente, este objeto é disponibilizado
 * para store do redux quando criamos com createStore e é conectado ao componente atraves
 * do conecte passando mapStateToProps.
 * */

const mapStateToProps = state => {
  return { count: state.count };
};

/**
 * recebe as actions e disponibiliza para o componente
 * este objeto sempre deve conter type: something
 * */

const mapDispatchToProps = dispatch => {
  return {
    increment1: value => dispatch(increment(value)),
    decrement1: value => dispatch(decrement(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
