import './App.css';
import Header from "./components/Header";
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  let todos = [
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
  ];

  const deleteNote = (todo) =>{ 
    console.log("I am on delete of ", todo);
  }

  return(
    <>
      <Header title="To-do List" searchBar={false}/>
      <Todos deleteNote={deleteNote} todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;