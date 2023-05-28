// Importing Hooks And Components
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //Managing State
  const [toDos, setToDos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("All");
  const [filteredTodo, setFilteredTodos] = useState([]);

  // Functions();
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([...toDos, { text: inputText, id: Date.now(), status: false }]);
    setInputText("");
  };

  const handleFilter = () => {
    switch (status) {
      case "complete":
        setFilteredTodos(toDos.filter((toDo) => toDo.status === true));
        break;
      case "incomplete":
        setFilteredTodos(toDos.filter((toDO) => toDO.status === false));
        break;
      default:
        setFilteredTodos(toDos);
    }
  };


  useEffect(() => {
    handleFilter();
  });
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="inputWrapper">
        <div className="input">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            action=""
          >
            <input
              className="todoInput"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              required
              type="text"
              placeholder="🖋️ Add item..."
            />
            <button>
              <i id="addButton" className="fas fa-plus"></i>
            </button>
          </form>
        </div>
        <div className="dropDownBox">
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="dropDown"
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>

      <div className="todos">
        {
        // Mapping Through Todos
        filteredTodo.map((item) => {
          return (
            <div key={item?.id} className="todo">
              <span className={item.status ? "completedText" : "todoText"}>
                {item?.text}
              </span>
              <div className="right">
                <i
                // Completing Todos
                  onClick={() => {
                    setToDos(
                      toDos.filter((obj) => {
                        if (obj.id === item.id) {
                          obj.status = !item?.status;
                        }
                        return obj;
                      })
                    );
                  }}
                  id="completeButton"
                  className="fa-solid fa-square-check"
                ></i>
                <i
                // Deleting Todos
                  onClick={() => {
                    setToDos(toDos.filter((el) => el.id !== item.id));
                  }}
                  id="closeButton"
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
