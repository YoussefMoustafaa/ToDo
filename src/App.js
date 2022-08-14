import React, { useState } from "react"
import Header from "./Header"
import TodoItem from "./TodoItem"
import Form from "./Form"
import { TodoProvider } from "./TodoContext"
import "./App.css"

function App() {
    const [hover, setHover] = useState(false)
    const [value, setValue] = useState("all")
    const [inputText, setInputText] = useState("")

    return (
        <TodoProvider>
            <div className="todo-app">
                <Header />
                <Form inputText={inputText}
                setInputText={setInputText}
                value={value}
                setValue={setValue}
                />
                <TodoItem 
                value={value}
                hover={hover}
                setHover={setHover}
                />
            </div>
        </TodoProvider>
    )
}

export default App