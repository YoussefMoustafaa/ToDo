import React, {useContext} from "react"
import { TodoContext } from "./TodoContext"
import "./App.css"

function Form({inputText, setInputText, setValue}) {

    const [todos, setTodos] = useContext(TodoContext)

    function handleForm(event) {
        setInputText(() => event.target.value)
    }

    function handleSubmit(event) {
        if (inputText !== "") {
            event.preventDefault()
            setTodos([ 
                ...todos,
                { text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
            ])
            setInputText("")
        } else return event.preventDefault()
    }

    function handleSelection(event) {
        setValue(() => event.target.value)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleForm} placeholder="ToDo" value={inputText} />
            <button>+</button>
            <select onChange={handleSelection}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
        </form>
    )
}

export default Form