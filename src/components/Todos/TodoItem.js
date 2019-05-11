import React from 'react'

const TodoItem = ({ todo, isActive, onSelectTodo }) => {
  return (
    <li
      className={isActive ? 'indigo darken-4' : undefined}
    >
      <a
        onClick={isActive ? undefined : () => onSelectTodo(todo)}
        href='#!'
        className={isActive ? 'white-text waves-effect waves-purple' : 'waves-effect waves-purple'}
      >
        {todo.text}
      </a>
    </li>
  )
};

export default TodoItem
