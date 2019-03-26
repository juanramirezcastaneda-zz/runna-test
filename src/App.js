import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
// import * as thunk from "./ducks/berries/thunk";
import { berriesOperations } from "./ducks/berries";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFetchClick = this.handleFetchClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFetchClick(evt) {
    // this.props.fetchServerAction(this.props.berry.id);
  }

  handleInputChange(evt) {
    const berryIdAction = berriesOperations.changeBerryId(evt.target.value);
    this.props.dispatch(berryIdAction);
    //dispatch(berriesOperations.changeBerryId(evt.target.value));
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
          <input
            //value={this.props.berry.id}
            onChange={this.handleInputChange}
          />
          <pre>{JSON.stringify(this.props)}</pre>
          <button onClick={this.handleFetchClick}>Test redux action</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   fetchServer: state.fetchServerReducer,
//   berry: state.berryReducer
// });

const mapStateToProps = state => {
  return {
    berries: state.berriesState.berries
  };
};

const mapDispatchToProps = dispatch => ({
  // fetchServerAction: berryId => dispatch(fetchServerAction(berryId)),
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
