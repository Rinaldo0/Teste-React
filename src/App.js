import React, { Component } from 'react';
import './App.css';
import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RANKING</h1>
          
        </header>
        <Ranking />
      </div>
    );
  }
}

export default App;
