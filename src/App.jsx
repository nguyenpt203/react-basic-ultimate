import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoTitle from './components/todo/TodoTitle';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const title = "Todo List";
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Leaning React" },
    { id: 2, name: "Watching Youtube" },
  ])

  const addNewTodo = (name) => {
    alert(`Say hi ${name}`)
  };

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
