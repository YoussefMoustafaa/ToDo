import React, {useContext} from "react"
import "./App.css"
import Todo from "./Todo"
import { TodoContext } from "./TodoContext"

function TodoItem({value, hover, setHover}) {

    const [todos, setTodos] = useContext(TodoContext)

    if (todos.length === 0) {
        return (
            <h3 style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '10px', color: 'purple'}}>
                'No items to show'
            </h3>
        )
    } else if (value === "all") {

        return todos.map( todo => <Todo 
        todos={todo}
        setTodos={setTodos}
        key={todo.id}
        hover={hover}
        setHover={setHover}
        />).sort((a, b) => a.text > b.text ? 1 : -1)

    } else if (value === "completed") {

       return todos.map( todo => todo.completed ? <Todo 
        todos={todo}
        setTodos={setTodos}
        key={todo.id}
        hover={hover}
        setHover={setHover}
        /> : null).sort((a, b) => a > b ? 1 : -1)

    } else if (value === "incompleted") {

       return todos.map( todo => todo.completed === false ? <Todo 
        todos={todo}
        setTodos={setTodos}
        key={todo.id}
        hover={hover}
        setHover={setHover}
        /> : null).sort((a, b) => a > b ? 1 : -1)

    } else return null
}

export default TodoItem