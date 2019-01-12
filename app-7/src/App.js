import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      toDoArray:[]
    }
  }

  handleAddTask=(chore)=>{
    this.setState({toDoArray:[...this.state.toDoArray, chore]})
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask output={this.handleAddTask}/>
        <List chore={this.state.toDoArray}/>
      </div>
    );
  }
}

export default App;


//calls components from newtask list
//holds an array to send to list