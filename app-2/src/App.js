import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list:['One','Two','Three','Four','Five','Six','Twenty']
    }    
  }


  render() {
    
    return (
      <div className="App">
        {this.state.list.map((e,i)=> <h4 key= {i}> {e} </h4>)}
      </div>
    );
  }
}

export default App;
