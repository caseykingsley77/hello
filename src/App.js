import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Employee/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get s tarted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
