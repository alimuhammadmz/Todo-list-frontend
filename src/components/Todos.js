import React from 'react'
import TodoNote from './TodoNote';

const Todos = (props) => {
  return (
    <div className='container'>
      <h2 className="text-center">My To-do list</h2>
      <ul>
        {props.todos.map(item => (
          <TodoNote todo={item} key={item.id} deleteNote={props.deleteNote}></TodoNote>
        ))}
      </ul>
    </div>
  )
}

export default Todos
