import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(prop){
    super(prop)

    this.state = {
      toDoArray: [],
      toDoItem:''
    }
  }

  handleToDoInput=(val)=>{
    this.setState({toDoItem: val})
  }

  handleToDoUpdate=()=>{
    let toDo = this.state.toDoArray.map((val)=>val)
    toDo.push(this.state.toDoItem)
    this.setState({toDoArray: toDo})
  }

  render() {
    console.log(this.toDoArray)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e)=>this.handleToDoInput(e.target.value)}></input>
        <button onClick={()=>{this.handleToDoUpdate(this.state.toDoItem)}}> Add</button>
        <Todo chores= {this.state.toDoArray}/> 
      </div>
    );
  }
}

export default App;
