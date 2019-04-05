import React from 'react'

import { withTodos } from '../../containers'

import TodosList from './TodosList'

const Todos = ({
  todos,
  selectedTodo,
  onSelectTodo,
  onCreateTodo,
  onRemoveTodo
}) => (
  <TodosList
    todos={todos}
    selectedTodo={selectedTodo}
    onSelectTodo={onSelectTodo}
    onRemoveTodo={onRemoveTodo}
  />
);

export default withTodos(Todos)
