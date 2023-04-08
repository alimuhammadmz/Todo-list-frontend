import './App.css';
import Header from "./components/Header";
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, { useState } from 'react';
import addNote from './components/AddNote';
import AddNote from './components/AddNote';

function App() {
  //implementation of useState hook
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "Do assignment",
      description: "I have to do my college assignment."
    },
    {
      id: 2,
      label: "Do grocery",
      description: "I have to do my grocery."
    },
    {
      id: 3,
      label: "Do cleaning",
      description: "I have to clean my room."
    },
  ]);

  const deleteNote = (targetTodo) => {
    const index = todos.findIndex((todo) => todo.id === targetTodo.id);
    if (index > -1) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }
  //implementation of useState hook

  return (
    <>
      <Header title="To-do List" searchBar={false} />
      <Todos deleteNote={deleteNote} todos={todos} />
      <Footer />
      {/* <AddNote></AddNote> */}
    </>
  );
}

export default App;