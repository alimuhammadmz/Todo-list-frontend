import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Header title="To-do List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
