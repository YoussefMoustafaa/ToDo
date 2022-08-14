import React from "react"

function Todo({todos, setTodos, hover, setHover}) {

    const completedStyle = {
        color: "darkgrey",
        textDecoration: "line-through",
        fontStyle: "italic"
    }

    const displayedBtn = {
        visibility: "visible",
        background: "none",
        fontWeight: "bold",
        color: "darkred",
        marginLeft: "10px",
        fontFamily: 'Arial, Helvetica, sans-serif',
    }

    // const todoStyle = {
    //     color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    // }

    const unDisplayedBtn = {
        display: "none"
    }

    function handleChange(id) {
        setTodos(todo => todo.map(item => item.id === id ? {text: item.text, completed: !item.completed, id: item.id} : item))
    }

    function onDelete(id) {
        setTodos(todo => todo.filter(todo => todo.id !== id))
    }

    return (
        <div className="todo-item" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <input
                    type="checkbox"
                    checked={todos.completed}
                    onChange={() => handleChange(todos.id)}
                    className="checkbox-input"
                />
            <p style={todos.completed ? completedStyle : null}>{todos.text}</p>
            <button style={hover ? displayedBtn : unDisplayedBtn} onClick={() => onDelete(todos.id)}>X</button>
        </div>
    )
}

export default Todo