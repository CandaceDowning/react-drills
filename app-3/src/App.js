import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: ['One','Two','Three','Four','Five','Six','Twenty'],
      userInput:""
    }


  }

  onChange = (val) => {
    this.setState({userInput: val})
  }

 
  render() {
    
    return (
      <div className="App">
      <input onChange= {(e)=> this.onChange(e.target.value)}></input>
       {this.state.list.filter(e => e.includes(this.state.userInput)).map((e,i)=> <h4 key= {i}> {e} </h4>)}
      </div>
    );
  }
}

export default App;
