const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleClickDel = (id) => {
        deleteTodo(id)
    }
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (
                    <div className="todo-item" key={item.id} >
                        <div>{item.name}</div>
                        <button style={{ color: 'red' }} onClick={() => { handleClickDel(item.id) }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;