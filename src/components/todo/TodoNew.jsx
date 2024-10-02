import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState("")
    const handleClick = () => {
        console.log(">>>check ", valueInput)
    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input className="todo-input" type="text" name="" id="" onChange={(event) => handleOnchange(event.target.value)} />
            <button className="todo-btn" style={{ cursor: "pointer" }} onClick={() => { handleClick() }}>Add</button>

            <div className="todo-input-value">
                My text input is = {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;