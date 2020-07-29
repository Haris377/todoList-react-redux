import React, { Component } from 'react'
import {Counter} from './counter';

class Counters  extends Component {
    render() { 
        return (
       <div>
        <Counter
          onDelete={this.props.onDelete}
          onIncrement={this.props.onIncrement}
          counter={this.props.counters}
          onReset={this.props.onReset}
        />
        </div>
        );
    }
}

export default Counters;

