import React, { useState } from 'react'

import { ITodo } from '../types/types'

interface ITodoItemProps extends ITodo {
    index: number
    removeTodo: (id: string) => void
    toggleTodo: (id: string) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({
    id,
    title,
    completed,
    index,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span>{index + 1}. </span>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            <p>{title}</p>
            <button
                type="button"
                onClick={() => {
                    removeTodo(id)
                }}
            >
                X
            </button>
        </div>
    )
}

export default TodoItem
