import React, {Component} from 'react';

class Counter extends Component {
    state = {}
    render() {
        return (
            <div>

                <p>counter: 0
                    <br/>
                    <button>+</button>
                    <button>+</button>
                </p>
            </div>
        );
    }
}

export default Counter;