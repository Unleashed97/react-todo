import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []
    if(todo.completed){
        classes.push('done')
    }
    return (
        <li className="todo__item">
            <span className={'first ' + classes.join(' ')}>
                <input type="checkbox" className="todo__checkbox" checked={todo.completed} onChange={() => onChange(todo.id)}/>
                <strong className="todo__counter">{index + 1}</strong>
                &nbsp;
                <p className="todo__name">{todo.title}</p>

            </span>

            <span className="todo__management">
                <button className="todo__edit">
                    <FontAwesomeIcon icon="pen" />
                </button>
                <button className="todo__remove" onClick={(removeTodo.bind(null, todo.id))}>
                    <FontAwesomeIcon icon="trash" />
                </button>
            </span>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem