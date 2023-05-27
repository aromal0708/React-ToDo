import { useState } from "react";
import "./App.css";


function App() {

  const [toDos, setToDos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDos([...toDos, { text: inputText, id: Date.now(), status: false }])
    setInputText("")
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <form onSubmit={(e) => { handleSubmit(e) }} action="">
          <input
            className="todoInput"
            onChange={e => setInputText(e.target.value)}
            value={inputText}
            required
            type="text"
            placeholder="🖊️ Add item..."
          />
          <button>
            <i id="addButton" className="fas fa-plus"></i>
          </button>
        </form>
      </div>

      <div className="todos">
        {toDos.map((item) => {
          return (
            <div key={item?.id} className="todo">
              <span className={item.status?'completedText':'todoText'}>{item?.text}</span>
              <div className="right">
                <i onClick={() => {
                  setToDos(toDos.filter(obj =>{
                    if(obj.id===item.id){
                      obj.status = !item?.status
                    }
                    return obj
                  }))
                }} 
                id='completeButton' className="fa-solid fa-square-check"></i>
                <i id='closeButton' className="fas fa-times"></i>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
