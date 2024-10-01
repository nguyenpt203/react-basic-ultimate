const TodoNew = (props) => {
    const { addNewTodo } = props;
    const handleClick = () => {
        alert("Click me")
    }
    const handleOnchange = (event) => {
        console.log(">>> check event", event);
    }
    return (
        <div className="todo-new">
            <input className="todo-input" type="text" name="" id="" onChange={(event) => handleOnchange(event.target.value)} />
            <button className="todo-btn" onClick={() => { handleClick() }}>Add</button>
        </div>
    )
}
export default TodoNew;