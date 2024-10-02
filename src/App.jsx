import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoTitle from './components/todo/TodoTitle';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const title = "Todo List";
  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  };

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (

    <div className="todo-container">
      <TodoTitle title={title} />
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData todoList={todoList} />
      <div className="todo-image">
        <img className='logo' src={reactLogo} alt="react-logo" />
      </div>
    </div>

  )
}

export default App
