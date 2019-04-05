import React from 'react'

const TodoItem = ({ todo, isActive, onRemoveTodo, onSelectTodo }) => {
  return (
    <li
      onClick={() => onSelectTodo(todo)}
      className={isActive ? 'deep-orange accent-2' : undefined}
    >
      <a
        href='#!'
        className={isActive ? 'waves-effect waves-red white-text' : 'waves-effect waves-red'}
      >{todo.text}</a>
    </li>
  )
};

export default TodoItem
