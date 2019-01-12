import React  from 'react';
import ToDo from './ToDo'

function List(props){
    return <div>{props.chore.map((e,i)=> <h1 key={i}> {e} </h1>)}</div>
}

export default List
  
//takes array from app component and renders a list to display