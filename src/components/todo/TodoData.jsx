const TodoData = (props) => {
    const { todoList } = props;
    return (
        <div className="todo-data">
            <div>Leaning React</div>
            <div>Watching Youtube</div>
            <div>{JSON.stringify(props)}</div>
        </div>
    )
}

export default TodoData;