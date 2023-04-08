import React from 'react'

const TodoNote = (props) => {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{props.todo.label}</h3>
          <p>{props.todo.description}</p>
        </div>
        <button className="btn btn-sm btn-success" onClick={() => {props.deleteNote(props.todo) }}>Done</button>
      </li>
    </>
  )
}

export default TodoNote
