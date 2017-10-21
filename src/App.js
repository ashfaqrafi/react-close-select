import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showResults: false,
            toggle: false
        };
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(e) {
        e.preventDefault();
        this.setState((prevState) => ({
                showResults: true,
                toggle: !prevState.toggle
            })
        );
    }

    render() {
    return (
      <div className="App">
          <div className="container">
              <button onClick={this.eventHandler}>DB</button>
              {
                  this.state.showResults ?
                      <div className={this.state.toggle ? 'card-bg db' : 'dn'}>
                          <p className="fll">All the tables in the selected database</p>
                          <img src="../cancel.svg" alt="" className="cross-bttn flr" onClick={this.eventHandler} />
                      </div>
                      :
                      null
              }
              <div className="graph-toolbox-wrapper m-top-1p5">
                  <div className="form-group add-select">
                      <select className="form-control large height-5r">
                          <option>High</option>
                          <option>Mid</option>
                          <option>Low</option>
                      </select>
                  </div>
              </div>

          </div>
      </div>
    );
  }
}

export default App;
