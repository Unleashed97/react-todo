import React from 'react'

import { ITodo } from '../types/types'
import TodoItem from './TodoItem'

interface ITodoListProps {
    items: ITodo[]
    toggleTodo: (id: string) => void
    removeTodo: (id: string) => void
}

const TodoList: React.FC<ITodoListProps> = ({
    items,
    removeTodo,
    toggleTodo,
}) => {
    return (
        <div>
            {items.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    index={index}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default TodoList
