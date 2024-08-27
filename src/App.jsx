import './components/todo/todo.css';
import Todonew from './components/todo/Todonew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    
  ]);


  const datto = "Hoang Tien Dats"
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "VN"
  }
  const addNewTodo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1,10000),
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
          <TodoData
            name={datto}
            age={age}
            data={data}
            todoList={todoList}
          />
          <div className='todo-image'>
            <img src={reactLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
