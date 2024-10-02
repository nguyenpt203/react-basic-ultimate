const TodoData = (props) => {
    const { todoList, name } = props;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Leaning React</div>
            <div>Watching Youtube</div>
            <div>{JSON.stringify(todoList)}</div>
        </div>
    )
}

export default TodoData;