import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Facebook Auth</h1>
        </header>
        <Facebook />
      </div>
    );
  }
}

export default App;
