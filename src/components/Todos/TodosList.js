import React from 'react'

import { withTodos } from '../../containers'

import TodoItem from './TodoItem'

const TodosList = ({ todos, selectedTodo, onSelectTodo }) => {
  if (todos.length) {
    return todos.map(todo => (
      <TodoItem
        key={todo.uid}
        todo={todo}
        isActive={selectedTodo && selectedTodo.uid === todo.uid}
        onSelectTodo={onSelectTodo}
      />
    ))
  } else {
    return (
      <li>
        <a href='#!' className='subheader'>No To-Do Lists</a>
      </li>
    )
  }
};

export default withTodos(TodosList)
