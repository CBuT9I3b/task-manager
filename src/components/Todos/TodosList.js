import React from 'react'

import TodoItem from './TodoItem'

const TodosList = ({ todos, onRemoveTodo }) => (
  <ul className='collection'>
    {todos.length ?
      todos.map(todo => <TodoItem key={todo.uid} todo={todo} onRemoveTodo={onRemoveTodo} />) :
      <li className='collection-item'>No Todos</li>
    }
  </ul>
);

export default TodosList
