import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {

  const [toDos, setToDos] = useState([]);
  const [InputText, setInputText] = useState("");


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <form action="">
        <input
          className="todoInput"
          required
          type="text"
          placeholder="🖊️ Add item..."
          />
          </form>
        <i id="addButton" className="fas fa-plus"></i>
      </div>

      <div className="todos">
        <Todo/>
      </div>
    </div>
  );
}

export default App;
