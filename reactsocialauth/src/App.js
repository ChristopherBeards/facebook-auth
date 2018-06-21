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
        <p>Enter into parts unknown, but first! Authenticate with the book of face!</p>
        <Facebook />
      </div>
    );
  }
}

export default App;
