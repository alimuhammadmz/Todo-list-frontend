import React from 'react'
import TodoNote from './TodoNote';
import { Card, ListGroup } from "react-bootstrap";

const Todos = (props) => {
  return (
    <div className="container">
      <Card className="my-5">
        <Card.Header className="bg-secondary text-white">My To-do list</Card.Header>
        <Card.Body>
          {props.todos.length === 0 ? (
            <h3>Yayy! No tasks pending :)</h3>
          ) : (
            <ListGroup>
              {props.todos.map((item) => (
                <TodoNote
                  todo={item}
                  key={item.id}
                  deleteNote={props.deleteNote}
                ></TodoNote>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Todos
