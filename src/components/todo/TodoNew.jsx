const TodoNew = (props) => {
    const { addNewTodo } = props;

    return (
        <div className="todo-new">
            <input className="todo-input" type="text" name="" id="" />
            <button className="todo-btn" onClick={() => { addNewTodo('Nguyen') }}>Add</button>
        </div>
    )
}
export default TodoNew;