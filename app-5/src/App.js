import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image randoImage={'https://picsum.photos/600/800'}/>
      </div>
    );
  }
}

export default App;
