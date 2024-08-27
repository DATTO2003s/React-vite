import './components/todo/todo.css';
import Todonew from './components/todo/Todonew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg';
const App = () => {
  const datto = "Hoang Tien Dats"
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "VN"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
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
