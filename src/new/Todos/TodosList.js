import React from 'react'

import TodoItem from './TodoItem'

const TodosList = ({ todos, selectedTodo, onSelectTodo, onRemoveTodo }) => {
  if (todos.length) {
    return todos.map(todo => (
      <TodoItem
        key={todo.uid}
        todo={todo}
        isActive={selectedTodo.uid === todo.uid}
        onSelectTodo={onSelectTodo}
        onRemoveTodo={onRemoveTodo}
      />
    ))
  } else {
    return (
      <li>
        <a
          href='#!'
          className='waves-effect waves-purple'
        >No Todos</a>
      </li>
    )
  }
};

export default TodosList
