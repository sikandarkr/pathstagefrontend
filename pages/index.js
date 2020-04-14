import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/actions/counterActions";
import Login from "../components/Layout/Login";
import Dragable from "../components/DragableExample/Dragable";
import Dashboard from "../components/Layout/Dashboard";
import Navbar from "../components/Navbar/Navar";
class App extends React.Component {
  static getInitialProps({ store }) {}
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Dragable /> */}
        <Navbar />
        <Dashboard />
        {/* <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
