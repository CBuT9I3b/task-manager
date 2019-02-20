import React from 'react'

const TodoItem = ({ todo, onRemoveTodo }) => (
  <li className='collection-item'>
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
