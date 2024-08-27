import './components/todo/todo.css';
import Todonew from './components/todo/Todonew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learn react" },
    // { id: 2, name: "Watching Youtube" }
  ]);


  const datto = "Hoang Tien Dats"
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "VN"
  }
  const addNewTodo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 10000),
      name: name
    }
    //syntax js spread syntax
    setTodoList([...todoList, newToDo])
    function randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

  return (
    < >
      <div className="todo-container">
        <div className='todo-card'>
          <span className="todo-title">TO DO LIST</span>
          <Todonew
            addNewTodo={addNewTodo}
          />
           {/* {todoList.length > 0 &&
            <TodoData
              todoList={todoList}
            />

          }
          {todoList.length === 0 &&
            <div className='todo-image' style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
              <img src={reactLogo} alt="" />
            </div>

          } */ }
          {
            todoList.length > 0 ?
              <TodoData
                todoList={todoList}
              />

              :

              <div className='todo-image' style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
                <img src={reactLogo} alt="" />
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default App
