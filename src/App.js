import React, { Component } from 'react';
import Header from './Component/Header/header';
import Store from './Component/Inventory/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Store/>
      </div>
    );
  }
}

export default App;
