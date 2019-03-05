import React from 'react'

const TodoItem = ({ todo, isActive, onRemoveTodo, onSelectTodo }) => {
  let mStyle = isActive ? 'collection-item active' : 'collection-item';
  return (
    <li
      className={mStyle}
      onClick={() => onSelectTodo(todo)}
    >
      <div>
        {todo.text}
        <a
          href='#!'
          className='secondary-content'
          onClick={() => onRemoveTodo(todo.uid)}
        ><i className='material-icons'>close</i></a>
      </div>
    </li>
  )
};

export default TodoItem
