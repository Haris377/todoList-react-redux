import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import { increment, deleteCounter, resetCounters } from './components/actions';
import { connect } from 'react-redux';
import './components/reducer';

 class App extends Component{
  render() {
    return(
      <React.Fragment>
      <NavBar totalCounters={this.props.counters.filter((number)=> number > 0).length}/>
      <main className="container">
        <Counters
        counters = {this.props.counters}
        onReset = {this.props.resetCounters}
        onIncrement = {this.props.increment}
        onDelete = {this.props.deleteCounter}
        />
      </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment,
    deleteCounter,
    resetCounters
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);