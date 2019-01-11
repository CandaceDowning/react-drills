import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      user:'',
      pass:''
    }
  }

  nameUpdate(val){
    this.setState({user:val})
  }
  passUpdate(val){
    this.setState({pass:val})
  }
  clickAlert(val){
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }


  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.nameUpdate(e.target.value)}></input>
        <input onChange={(e)=>this.passUpdate(e.target.value)}></input>
        <button onClick={()=>this.clickAlert(this.state.clickAlert)}>Login</button>
      </div>
    );
  }
}

export default App;
