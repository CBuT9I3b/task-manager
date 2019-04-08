import React from 'react'

import { withTodos } from '../../containers'

import TodosList from './TodosList'
import ModalAddTodo from './ModalAddTodo'

const Todos = ({
  todos,
  selectedTodo,
  onSelectTodo,
  onCreateTodo,
  onRemoveTodo
}) => (
  <div>
    <TodosList
      todos={todos}
      selectedTodo={selectedTodo}
      onSelectTodo={onSelectTodo}
      onRemoveTodo={onRemoveTodo}
    />
    <ModalAddTodo
      onCreateTodo={onCreateTodo}
    />
  </div>
);

export default withTodos(Todos)
