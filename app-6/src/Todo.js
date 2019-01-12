import React from 'react';


function Todo(props){
   return <div> {props.chores.map((e,i)=> <h1 key={i}> {e} </h1>)}</div>
}

export default Todo
