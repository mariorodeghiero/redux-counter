import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const DisplayCounter = ({ count }) => {
    return (
        <p>The counter is in {count}</p>
    )
}

const mapStateToProps = (state) => {
    return { count: state.count }
}

export default connect(mapStateToProps)(DisplayCounter);