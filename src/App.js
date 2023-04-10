import './App.css';
import Header from "./components/Header";
import AddNote from './components/AddNote';
import Todos from './components/Todos';
import Footer from './components/Footer';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //implementation of useState & useEffect hook
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteNote = (targetTodo) => {
    const index = todos.findIndex((todo) => todo.id === targetTodo.id);
    if (index > -1) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  const addNote = (title, description) => {
    const newTodos = [...todos];
    const id = newTodos.length;
    const tmpNote = {
      id: id,
      label: title,
      description: description
    }
    newTodos.push(tmpNote);
    setTodos(newTodos);
  }
  //implementation of useState hook

  return (
    <Router>
      <Header title="To-do List" searchBar={false} />
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              <React.Fragment>
                <AddNote addNote={addNote}></AddNote>
                <Todos deleteNote={deleteNote} todos={todos} />
              </React.Fragment>
            )
          }}
        >
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch >
      <Footer />
    </Router >
  );
}

export default App;