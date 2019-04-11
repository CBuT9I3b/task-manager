import React from 'react'

const TodoItem = ({ todo, isActive, onRemoveTodo, onSelectTodo }) => {
  return (
    <li
      onClick={() => onSelectTodo(todo)}
      className={isActive ? 'indigo darken-4' : undefined}
    >
      <a
        href='#!'
        className={isActive ? 'white-text waves-effect waves-purple' : 'waves-effect waves-purple'}
      >
        {todo.text}
      </a>
    </li>
  )
};

export default TodoItem
