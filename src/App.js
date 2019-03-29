import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { berriesOperations } from "./ducks/berries";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFetchClick = this.handleFetchClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFetchClick(evt) {
    this.props.loadBerries(this.props.berries.id);
  }

  handleInputChange(evt) {
    this.props.changeBerryId(evt.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <input onChange={this.handleInputChange} />
          <pre>{JSON.stringify(this.props)}</pre>
          <button onClick={this.handleFetchClick}>Test redux action</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    berries: state.berriesState.berries
  };
};

const mapDispatchToProps = dispatch => ({
  changeBerryId: berryId => dispatch(berriesOperations.changeBerryId(berryId)),
  loadBerries: berryId => dispatch(berriesOperations.loadBerries(berryId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
