import React, { Component } from 'react';
import Counter from './Counter';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer';
import DisplayCounter from './DisplayCounter';
import logger from 'redux-logger';

let store = createStore(counterReducer, applyMiddleware(logger));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <DisplayCounter />
      </Provider>
    );
  }
}

export default App;
