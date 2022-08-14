import React, {createContext, useState} from "react"

export const TodoContext = createContext()

export function TodoProvider(props) {
    const [todos, setTodos] = useState([
        {
        id: 1,
        text: "Take out the trash",
        completed: false
        },
        {
            id: 2,
            text: "Do HomeWork",
            completed: true
        },
        {
            id: 3,
            text: "Wash the dishes",
            completed: false
        }
    ])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}