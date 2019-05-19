import React from 'react'

const TodoItem = ({ todo, isActive, onSelectTodo }) => {
  return (
    <li
      className={isActive ? 'deep-orange darken-1' : undefined}
    >
      <a
        onClick={isActive ? undefined : () => onSelectTodo(todo)}
        href='#!'
        className={isActive ? 'white-text waves-effect waves-red' : 'waves-effect waves-red'}
      >
        {
          todo.quantityTasks ?
            <span data-badge-caption='tasks'
                  className='badge new'
            >{todo.quantityTasks}</span> :
            null
        }
        {todo.text}
      </a>
    </li>
  )
};

export default TodoItem
