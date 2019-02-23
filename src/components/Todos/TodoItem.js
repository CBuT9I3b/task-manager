import React from 'react'

const TodoItem = ({ todo, onRemoveTodo, onSelectTodo }) => (
  <li className='collection-item' onClick={() => onSelectTodo(todo)}>
    <div>
      {todo.text}
      <a
        href="#!"
        className="secondary-content"
        onClick={() => onRemoveTodo(todo.uid)}
      ><i className="material-icons">close</i></a>
    </div>
  </li>
);

export default TodoItem
