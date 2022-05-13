import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import style from './home.module.css';
import  Newtodo from './Newtodo';


export const Home = () => {

const[todos, setTodos]= useState([]);

const handelAddTodo = (todo)=> {
setTodos( (prevTodos) => {
  return [{ id: uuidv4(), todo}, ...prevTodos, ]
})
}   

const handelRemoveTodo = (id) => {
const filteredTodos = todos.filter((todo)=> { 
  return   todo.id !== id})

setTodos((prevTodos)=> { const filteredTodos = prevTodos.filter((todo)=> todo.id !== id);
  return filteredTodos
})
}

  return (
    <div className={style.container}> 
        <h1 style={{color:"white"}}>Todo App</h1>
        <Newtodo onAddTodo ={handelAddTodo}/> 
        <Todos  todos = {todos}  onRemoveTodo={handelRemoveTodo} />
    </div> // from <Newtodo /> fucntion will be sent as a props to Newtodo 
  )
}
