import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoTitle from './components/todo/TodoTitle';
import reactLogo from './assets/react.svg';

const App = () => {

  const title = "Todo List";

  return (

    <div className="todo-container">
      <TodoTitle title={title} />
      <TodoNew />
      <TodoData />
      <div className="todo-image">
        <img className='logo' src={reactLogo} alt="react-logo" />
      </div>
    </div>

  )
}

export default App
