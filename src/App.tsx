import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'

import { ITodo } from './types/types'
import TodoList from './components/TodoList'

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (inputValue) {
            setTodos([
                ...todos,
                {
                    id: nanoid(),
                    title: inputValue,
                    completed: false,
                },
            ])
        }

        setInputValue('')
    }

    const removeTodo = (id: string): void => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id: string): void => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== id) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }),
        )
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        e,
    ) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo()
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])
    return (
        <div className="wrapper">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />

            <button type="button" onClick={addTodo}>
                Add
            </button>

            <TodoList
                items={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    )
}

export default App
