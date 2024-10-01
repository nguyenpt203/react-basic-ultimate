const TodoTitle = (props) => {
    const { title } = props;
    return (
        <h2 className="todo-title">
            {title}
        </h2>
    )
}

export default TodoTitle;