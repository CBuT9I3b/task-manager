import React from 'react'

import TodoItem from './TodoItem'

const TodosList = ({ todos, selectedTodo, onRemoveTodo, onSelectTodo }) => (
  <ul className='collection'>
    {todos.length ?
      todos.map(todo => (
        <TodoItem
          key={todo.uid}
          todo={todo}
          isActive={selectedTodo.uid === todo.uid}
          onRemoveTodo={onRemoveTodo}
          onSelectTodo={onSelectTodo}
        />)) :
      <li className='collection-item'>No Todos</li>
    }
  </ul>
);

export default TodosList
