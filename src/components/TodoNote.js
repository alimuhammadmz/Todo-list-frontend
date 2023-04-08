import React from 'react'

const TodoNote = (props) => {
  const todoNoteStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f8f8f8"
  };

  return (
    <div style={todoNoteStyle} >
      <li className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{props.todo.label}</h3>
          <p>{props.todo.description}</p>
        </div>
        <button className="btn btn-sm btn-success" onClick={() => { props.deleteNote(props.todo) }}>Done</button>
      </li>
    </div>
  );
}

export default TodoNote
