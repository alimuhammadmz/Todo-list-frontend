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
import axios from 'axios';

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //implementation of useState & useEffect hook
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    if (initTodo.length === 0) {
      const newTodos = [];
      axios.get('http://localhost:3002/api/todo/')
        .then(res => {
          const dataArray = res.data.message;
          dataArray.map(item => {
            const tmpNote = {
              id: item._id,
              label: item.label,
              description: item.description,
            }
            newTodos.push(tmpNote);
          });
          localStorage.setItem("todos", JSON.stringify(newTodos));
          setTodos(newTodos);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const deleteNote = (targetTodo) => {
    axios.delete(`http://localhost:3002/api/todo/delete/${targetTodo.id}`)
      .then(res => {
        const index = todos.findIndex((todo) => todo.id === targetTodo.id);
        if (index > -1) {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          localStorage.setItem("todos", JSON.stringify(newTodos));
          setTodos(newTodos);
        }
      });
  }

  const addNote = (title, description) => {
    const formData = {
      label: title,
      description: description
    }

    axios.post('http://localhost:3002/api/todo/create', formData)
      .then(res => {
        console.log(res.data);
        const newTodos = [...todos];
        const id = newTodos.length;
        const tmpNote = {
          id: id,
          label: title,
          description: description
        }
        newTodos.push(tmpNote);
        setTodos(newTodos);
      })
      .catch(err => console.log(err));
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